import { ReactElement, useState } from "react";
import TableHOC from "../components/admin/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";

type OrderType = {
  _id: string;
  quantity: number;
  discount: number;
  amount: number;
  status: ReactElement;
  action: ReactElement;
};

const columns: Column<OrderType>[] = [
  {
    Header: "Id",
    accessor: "_id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const Order = () => {
    const [rows] = useState<OrderType[]>([{
        _id: "ksdnfkjsdfx",
        amount: 4000,
        quantity: 4,
        discount: 300,
        status: <span className="green">Shipped</span>,
        action: <Link to={`order/${"ksdnfkjsdfx"}`}>Manage</Link>,
    }]);
  const Table = TableHOC<OrderType>(
    columns,
    rows,
    "dashboard-product-box",
    "Orders",
    rows.length > 6 ? true : false
  )();
  return <div className="container mx-auto lg:px-20 mt-10">{Table}</div>;
};
export default Order;
