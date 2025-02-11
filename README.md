# Project Title

Tumbling Goat

## Overview

The Tumbling Goat provides pottery artists with a digital platform to connect with customers, market their products, and share details about events and selling locations. By streamlining marketing and sales efforts, the app empowers artists to focus on their craft while reaching a broader, more engaged audience.

### Problem Space

Pottery artists invest countless hours creating their unique pieces, but reaching customers and selling their work remains a significant challenge. Many rely on local markets, which often result in unpredictable sales and difficulty in planning inventory. This lack of stability and limited visibility can hinder their growth and artistic endeavors.

### User Profile

Pottery Artists: Independent artists and small pottery business owners seeking to expand their customer base, promote events, and streamline product sales.
Art Enthusiasts & Shoppers: Individuals interested in discovering unique, handmade pottery and supporting local artists.

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

- As a user, I want to be able to look for items on the main page and search for keywords. 
- As a user, I want to be able to sort all the items according to categories and collections. 
- As a user, I want to be able to access more details on a specific item when I click on it. 
- As a user, I want to be able to add an item to my cart and select the quantity. 

- As a user, I want to be able to be able to read and add a review on a specific item. 
- As a user, I want to be able to edit or delete my comment. 

- As a user, I want to see all the details of my order in my cart and be able to edit quantities or remove items from my order. 

- As a user, I want to be able to easily find the locations where the artist sells their art. 
- As a user, I want to be able to contact the artist and learn more about them. 

## Implementation

### Tech Stack

- React
- Express
- Client Libraries: 
    - react
    - react-router
    - axios
- Server Libraries
    - express

### APIs

- Google API

### Sitemap

- Home Page
- Product Page
- Cart Page
- Find Us Page
- Our Story Page

### Mockups

Provide visuals of your app's screens. You can use pictures of hand-drawn sketches, or wireframing tools like Figma.

### Data

Product Object :
``` 
 {
    id: "1",
    name: "Coffee Mug - Begbie",
    photo: "begbie_mug.jpg",
    price: "$45",
    stock: 8,
    category: "Mug",
    collection: "Begbie Collection",
    "brief-description":
      "A beautifully handcrafted coffee mug inspired by the majestic Begbie Mountain in Revelstoke.",
    "full-description":
      "Embrace the rugged beauty of the outdoors with this earthy, artisan-crafted mug. The design draws inspiration from the textured landscape and natural tones of Begbie Mountain, making it both a visual and tactile delight. With its sturdy form and comfortable grip, this mug is perfect for savoring your morning coffee or afternoon tea. A true piece of craftsmanship that brings the essence of nature to your daily routine.",
    "care-tips": [
      "Hand wash only to preserve the unique glaze and finish.",
      "Not dishwasher safe.",
      "Avoid sudden temperature changes, such as pouring boiling liquids into a cold mug.",
      "Use a soft sponge and mild detergent for cleaning.",
      "Do not soak for extended periods.",
      "Dry thoroughly to prevent moisture stains.",
    ],
    reviews: [],
    tags: ["handmade", "Begbie", "local-inspired", "Revelstoke", "mug"],
  }
  ```

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation working back from the capstone due date. 

---

## Future Implementations
Your project will be marked based on what you committed to in the above document. Here, you can list any additional features you may complete after the MVP of your application is built, or if you have extra time before the Capstone due date.

