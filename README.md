# URL Shortener

A simple URL shortening service built with Node.js, Express, MongoDB, and EJS.

## Features

- Shorten long URLs to convenient short links
- Track click counts for each shortened URL
- Clean, responsive web interface
- Persistent URL storage with MongoDB

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or connection string)
- npm (comes with Node.js)

## Screenshots 
![image](https://github.com/user-attachments/assets/53d0b1da-8f93-45e3-9497-009bc2051d0e)


## Installation

1. Clone the repository:
```bash
git clone https://github.com/kisk23/node_URL_Shortener.git
cd url-shortener
*******************************************************************
Usage
Access the web interface at http://localhost:3000

Enter a long URL in the form and click "Shrink"

Copy the generated short URL

Use the short URL to redirect to the original site

View click statistics in the dashboard
********************************************************************
API Endpoints
POST /shortUrls - Create a new short URL

Body: { fullUrl: "https://example.com" }

GET /:shortUrl - Redirect to original URL

GET / - View all shortened URLs




