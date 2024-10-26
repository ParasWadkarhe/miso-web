import React, { useState } from "react";

const ProductUploadForm = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    price: "",
    productImages: null,
    materials: "",
    dimensions: "",
    colorOptions: "",
    customizationOptions: "",
    stockAvailability: "",
    shippingDetails: "",
    returnPolicy: "",
    userReviews: "",
    relatedProducts: "",
    productCategory: "",
    discounts: "",
    sku: "",
    careInstructions: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "productImages") {
      setFormData({ ...formData, [name]: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, e.g., sending data to an API
    console.log(formData);
  };

  return (
    <form
      className="max-w-4xl mx-auto p-8 bg-gray-100 shadow-md rounded-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-6">Miso Customized Product</h2>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Product Name</label>
        <p className="text-sm text-gray-600 mb-1">
          Purpose: Should be clear, descriptive, and trendy.
        </p>
        <p className="text-sm text-gray-600 mb-1">
          Format: Include size/type if applicable (e.g., "Majestic Wooden Plaque
          - Large").
        </p>
        <input
          type="text"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Example: Pocket Charm Wooden Keychain"
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">
          Product Description
        </label>
        <p className="text-sm text-gray-600 mb-1">
          Purpose: Provide a detailed overview of the product’s features, uses,
          and unique selling points.
        </p>
        <textarea
          name="productDescription"
          value={formData.productDescription}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter product description"
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Price</label>
        <p className="text-sm text-gray-600 mb-1">
          Purpose: Display the final price, including any discounts or offers.
        </p>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Example: ₹150 (Including Customization)"
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">
          Product Images
        </label>
        <p className="text-sm text-gray-600 mb-1">
          Purpose: Provide high-quality visual representation.
        </p>
        <input
          type="file"
          name="productImages"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          multiple
        />
        <input
          type="file"
          name="productImages"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          multiple
        />
        <input
          type="file"
          name="productImages"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          multiple
        />
        <input
          type="file"
          name="productImages"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          multiple
        />
        <input
          type="file"
          name="productImages"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          multiple
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">
          Material/Ingredients
        </label>
        <p className="text-sm text-gray-600 mb-1">
          Purpose: Inform the customer of the product’s material composition.
        </p>
        <input
          type="text"
          name="materials"
          value={formData.materials}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Example: Made from 100% sustainable birch wood."
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">
          Dimensions/Size
        </label>
        <p className="text-sm text-gray-600 mb-1">
          Purpose: Ensure customers know the exact size and weight.
        </p>
        <input
          type="text"
          name="dimensions"
          value={formData.dimensions}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Example: 7x5 inches (17.7x12.7 cm)"
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">
          Color Options
        </label>
        <p className="text-sm text-gray-600 mb-1">
          Purpose: Display the available color variations.
        </p>
        <input
          type="text"
          name="colorOptions"
          value={formData.colorOptions}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Example: Natural Wood, Walnut"
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">
          Customization Options
        </label>
        <p className="text-sm text-gray-600 mb-1">
          Purpose: Highlight what parts of the product are customizable.
        </p>
        <input
          type="text"
          name="customizationOptions"
          value={formData.customizationOptions}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Example: Name, Image, Engraving"
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">
          Stock Availability
        </label>
        <p className="text-sm text-gray-600 mb-1">
          Purpose: Indicate whether the product is available for immediate
          purchase.
        </p>
        <input
          type="text"
          name="stockAvailability"
          value={formData.stockAvailability}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Example: In Stock, Ships in 2 days"
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">
          Shipping Details
        </label>
        <p className="text-sm text-gray-600 mb-1">
          Purpose: Provide transparency regarding delivery time and shipping
          costs.
        </p>
        <input
          type="text"
          name="shippingDetails"
          value={formData.shippingDetails}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Example: Ships within 3-5 business days."
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">
          Return Policy
        </label>
        <p className="text-sm text-gray-600 mb-1">
          Purpose: Clearly outline your return/refund policy.
        </p>
        <input
          type="text"
          name="returnPolicy"
          value={formData.returnPolicy}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Example: Returns accepted within 14 days."
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">User Reviews</label>
        <p className="text-sm text-gray-600 mb-1">
          Purpose: Display customer feedback to build trust and credibility.
        </p>
        <textarea
          name="userReviews"
          value={formData.userReviews}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Example: Rated 4.8/5 from 120 reviews."
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">
          Related Products
        </label>
        <p className="text-sm text-gray-600 mb-1">
          Purpose: Encourage cross-selling or upselling by suggesting similar or
          complementary products.
        </p>
        <input
          type="text"
          name="relatedProducts"
          value={formData.relatedProducts}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Example: Wooden Spotify Plaque"
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">
          Product Category
        </label>
        <p className="text-sm text-gray-600 mb-1">
          Purpose: Classify the product into the right category for easy
          browsing.
        </p>
        <input
          type="text"
          name="productCategory"
          value={formData.productCategory}
          onChange={handleChange}
          className="w-full p-2
                    border border-gray-300 rounded-md"
          placeholder="Example: Personalized Wooden Gifts"
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">
          Discounts/Offers
        </label>
        <p className="text-sm text-gray-600 mb-1">
          Purpose: Highlight ongoing promotions, deals, or bundles.
        </p>
        <input
          type="text"
          name="discounts"
          value={formData.discounts}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Example: Flat 20% off on all orders above ₹1000"
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">
          SKU/Product Code
        </label>
        <p className="text-sm text-gray-600 mb-1">
          Purpose: Help in tracking inventory and managing orders.
        </p>
        <input
          type="text"
          name="sku"
          value={formData.sku}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Example: WP-500-7x5 (for Wooden Plaque 7x5 inch)"
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">
          Care Instructions
        </label>
        <p className="text-sm text-gray-600 mb-1">
          Purpose: Provide clear guidelines on how to care for the product.
        </p>
        <input
          type="text"
          name="careInstructions"
          value={formData.careInstructions}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Example: Wipe with a dry cloth. Avoid direct sunlight and moisture."
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 mt-6 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
      >
        Upload Product
      </button>
    </form>
  );
};

export default ProductUploadForm;
