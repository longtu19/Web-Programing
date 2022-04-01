import React from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'



    function RenderDish({dish}){
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

    function RenderComments({comments}){
        
        const com = comments.map(e => {
            return (
                <div>
                    <ul className = "list-unstyled">
                        <li>{e.comment}</li>   
                        <li className = "m-3">-- {e.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(e.date)))}</li>
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


    const DishDetail = (props) => {
        if (props.dish != null){
            return (
                <div className = "container">
                     <div className = "row">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to = '/menu'>Menu</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className = "col-12">
                            <h3>{props.dish.name}</h3>
                            <hr/>
                        </div>
                    </div>
                    <div className = "row">
                        <RenderDish dish = {props.dish} />
                        <RenderComments comments = {props.comments}/>
                    
                    </div>

                </div>
            
           
            )

        }

        return (
            <div></div>
        )
        
        
    }



export default DishDetail;