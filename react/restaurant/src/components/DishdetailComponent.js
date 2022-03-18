import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'



class DishDetail extends Component {
    constructor(props){
        super(props)

        // this.state = {
        //     selected: null

        // }


    }

    // selectDish(dish){
    //     this.setState(selected = dish)

    // }

    renderDish(dish){
        if (dish != null){
            return (
 
                <div className = "col-xs-12 col-sm-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src = {dish.image} alt = {dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>

                        </CardBody>
                    </Card>

                </div>
       
            )

        }
        else{
            return (
                <div></div>
            )
        }
    }

    renderComments(dish){
        if (dish == null){
            return (
                <div></div>
            )
        }
        else{
            const com = dish.comments.map(e => {
                return (
                    <div>
                        <ul className = "list-unstyled">
                            <li>{e.comment}</li>
                            
                            <li className = "m-3">-- {e.author}, {e.date}</li>
                        </ul>
                    </div>

                )
            })

            return (
                <div className = "col-xs-12 col-sm-12 col-md-5 m-1" >
                    
                        <h4>Comments</h4>
                        {com}


                    
                    
                    
       
                </div>
            )
            


        }
    }


    render(){
        return (
            <div className = "row">
                {this.renderDish(this.props.select)}
                {this.renderComments(this.props.select)}
                
            </div>
           
        )
        
    }

}

export default DishDetail;