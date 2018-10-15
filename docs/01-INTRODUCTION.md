# API DESIGN WITH NODE AND TDD

## What is Node.js

Node.js framework is a simple way to writing custom server.

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

More than just Javascript out the browser. It's an open source platform built on Chrome's V8 engine that can be used out of the browser to build tooling and network based application.

## What is an API

In the simplest of terms, API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other. In fact, each time you check the weather on your phone, use the Facebook app or send an instant message, you are using an API.

Every time you use one of these applications, the application on your phone is connecting to the Internet and sending data to a server. The server then retrieves that data, interprets it, performs the necessary actions and sends it back to your phone. The application then interprets that data and presents you with the information you wanted in a human, readable format.

What an API really does, however, is provide a layer of security. Because you are making succinct and explicit calls, your phone’s data is never fully exposed to the server, and likewise the server is never fully exposed to your phone. Instead, each communicates with small packets of data, sharing only that which is necessary—kind of like you ordering food from a drive-through window. You tell the server what you would like to eat, they tell you what they need in return and then, in the end, you get your meal.

There are many types of APIs. For example, you may have heard of Java APIs, or interfaces within classes that let objects talk to each other in the Java programming language. Along with program-centric APIs, there are also Web APIs such as the Simple Object Access Protocol (SOAP), Remote Procedure Call (RPC), and perhaps the most popular—at least in name— Representational State Transfer (REST).

While the function of an API may be fairly straightforward and simple, the process of choosing which type to build, understanding why that type of API is best for your application, and then designing it to work effectively has proven to be far more difficult.

One of the greatest challenges of building an API is building one that will last. This is especially true for Web APIs, where you are creating both a contract between you and your users and a programming contract between your server and the client.

A Web API, otherwise known as a Web Service, provides an interface for Web applications, or applications that need to connect to each other via the Internet to communicate.

Early on, one of the most popular enterprise formats for APIs was SOAP. With the emergence of JavaScript Object Notation (JSON), we saw more reliance on HTTP and the growth of JSON-RPC APIs, while REST has grown in popularity and quickly become the de facto standard for general Web APIs today.

Now the most popular choice for API development, REST or RESTful APIs were designed to take advantage of existing protocols. While REST can be used over nearly any protocol, it typically takes advantage of HTTP when used for Web APIs. This means that developers do not need to install libraries or additional software in order to take advantage of a REST API.

REST also provides an incredible layer of flexibility. Since data is not tied to methods and resources, REST has the ability to handle multiple types of calls, return different data formats and even change structurally with the correct implementation of hypermedia.


### Constraints
Client-Server
Stateless
Cache
Uniform Interface
Layered System
Code on Demand

#### Layered System

As the name implies, a layered system is a system comprised of layers, with each layer having a specific functionality and responsibility. If we think of a Model View Controller framework, each layer has its own responsibilities, with the models comprising how the data should be formed, the controller focusing on the incoming actions and the view focusing on the output. Each layer is separate but also interacts with the other.
In REST, the same principle holds true, with different layers of the architecture working together to build a hierarchy that helps create a more scalable and modular application.

A layered system also lets you encapsulate legacy systems and move less commonly accessed functionality to a shared intermediary while also shielding more modern and commonly used components from them. A layered system also gives you the freedom to move systems in and out of your architecture as technologies and services evolve, increasing flexibility and longevity as long as you keep the different modules as loosely coupled as possible.
