## Project Management System ( PMS )
![GitHub Logo](https://github.com/mtrabelsi/PMS/blob/master/class%20Diagram.png)



## Attemp #1 Classical implementation
It's very tempting when seeing a classical problem like the above, with **ES6** we can use **classes** to solve it.
The good thing, is that the solution will be straight forward and easy to implement - as you can see we've 3 classes and simple relations between them.
However, this architechture isn't solid enough, because our classes are exposed to all users - any wrong usage can lead our data to be messed up! ( data can be directly modified  using setters/getters - this is not a good design )

## Attemp #2 Using state manager like "Redux"
As we all know, Redux is just an implementation of **Flux** design pattern, by using state management based on Flux, we can get ride of the limitation described in the **Attemp #1**: our data becomes **immutable** and can't be changed directly ( we can only mutate the data by dispatching actions! )

However, when using state management there are few and important things to consider :
- We should avoid deep nesting - otherwhise our data will be very hard to deal with
- A data normalization is highly recommanded!
- By using Redux, we're going to use plain Object literal - we're killing modularization and putting everything into a single tree object.
- Thinking enterprise wide - our data can't scale very well.

## Attemp #3 Hybrid solution : state management + ES6 Classes ! 
By using **redux-orm** we can benefit from the ES6 classes encapsulation and redux state management so that our application will be consistent and the our code  becoms quite readable (tiny).

Redux-orm provide a lot of facilities to integrate it's own database with redux's reducer.
Also, we can benefit from built-in queries to query our State ( like we do in relational databases ).



