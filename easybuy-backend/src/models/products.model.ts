import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },

    image: {
      type: String,
      required: [true, "Image is required"],
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    stock: {
      type: Number,
      required: [true, "Stock is required"],
    },
    // description: {
    //   type: String,
    //   required: [true, "Description is required"],
    // },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
