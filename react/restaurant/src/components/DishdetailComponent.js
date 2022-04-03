import React, { Component }from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody,
Form, FormGroup, Input, Label, Row, Col} from 'reactstrap'
import { Link } from 'react-router-dom'
import { Control, LocalForm, Errors } from 'react-redux-form'



const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;


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
                <RenderSubmitComments/>
                
        </div>
    )
        
}
    


class RenderSubmitComments extends Component {
    constructor(props){
        super(props)
        this.state = {
            isModalOpen: false

        }
        this.toggleModal = this.toggleModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        }
    

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen

        })
    }

    handleSubmit(values){
        console.log("Current State is: " + JSON.stringify(values))
        alert("Current State is: " + JSON.stringify(values))
    }

    render(){
        return (
            <div>
            
                <Button outline onClick = {this.toggleModal}>
                            <span className = "fa fa-pencil fa-lg"></span> Summit Comment
                </Button>   
    
                <Modal isOpen = {this.state.isModalOpen} toggle = {this.toggleModal}>
                        <ModalHeader toggle = {this.toggleModal}>Summit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit = {(values) => this.handleSubmit(values)}>

                                <div className = "mb-2">Rating</div>
                                <Row className ="form-group">
                                    
                                    <Col md = {12}>
                                        <Control.select model = ".rating" name = "rating" 
                                            className = "form-control ">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option> 
                                            <option>4</option> 
                                            <option>5</option> 
                                        </Control.select>

                                    </Col>


                                </Row>

                                <div className = "mb-2">Your Name</div>
                                <Row className ="form-group">
                                    
                                    <Col md = {12}>
                                        <Control.text  model = ".yourname"  id = "yourname" name = "yourname"
                                        className = "form-control" placeholder = "Your Name"
                                        validators = {{
                                        required, minLength:  minLength(3), 
                                        maxLength: maxLength(15)
                                    }}/>
                                        <Errors 
                                            className = "text-danger" 
                                            model = ".yourname" 
                                            show = "touched"
                                            messages = {{
                                                required: 'Required! ',
                                                minLength: 'Must be greater than 2 characters. ',
                                                maxLength: 'Must be 15 characters or less.'
                                            }}/>

                                    </Col>


                                </Row>

                                <div className = "mb-2">Comment</div>
                                <Row className ="form-group">
                                    <Col md = {12}>
                                    <Control.textarea model = ".message" id = "message" name = "message"
                                        rows = "7"
                                        className = "form-control"/>


                                    </Col>


                                </Row>
                                <Row className = "form-group">
                                <Col md = {{size: 5}}>
                                    <Button type = "submit" color = "primary">
                                        Submit
                                    </Button>
                                </Col>
                                </Row>
                            </LocalForm>
                        </ModalBody>
                </Modal>
            </div>

        )

    }
    

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