import React,{Component} from "react";



export class ErrorBoundaries extends Component{


    constructor(props){

super(props);

    this.state={ hasError: false}


    }


    static  getDerivedStateFromError(){

        return {hasError:true}
    }

    componentDidCatch(error){

        console.log("Error caught in Error Boundary:",error)

    }


    render(){

        if(this.state.hasError){


            return  <h1>Something went wrong.</h1>
        }

        return this.props.children;


    }
}