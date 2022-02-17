React has two kinds of components
    - class component (statefull components) smart compnents 
        - class keyword from es6
        - state
        - lifecycle methods *important 
    - funcitonal component (stateless components) dumb compnents
        - does not have state, they use props
        - rendering props
        - no life cycle methods

    - never update your state in render method/ never use setState inside render method
            - it cause an infinite loop

 Lifecycle methods
componentDidMount()  
componentWillUnmount() 


    - there is only one method that you can use to update the state in react
        - setState() 

SOLID - 
Single responsiblity principle A class should have one and only one reason to change, meaning that a class should have only one job.

-- React Router 
    npm install react-router-dom@6