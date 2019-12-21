import React, { SyntheticEvent } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col, Jumbotron } from "reactstrap";
import { User } from "../../models/user";

interface ILoginComponentProps{
    user:User
    userLogin:(u:string,p:string)=>void
}


export class LoginComponent extends React.Component<ILoginComponentProps,any>{
    constructor(props:any) {
        super(props)
        this.state = {
            username:'',
            password:''
        }
    }
    updateUsername = (e:any)=>{
        this.setState({
            ...this.state,
            username:e.target.value
        })
    }
    updatePassword = (e:any)=>{
        this.setState({
            ...this.state,
            password:e.target.value
        })
    }
    submitLogin = async (e:SyntheticEvent) => {
        e.preventDefault()
        this.props.userLogin(this.state.username, this.state.password)
    }
    render() {
        return (
            <div>
                <Jumbotron>
            <Form onSubmit={this.submitLogin}>
                <Row form>
                    <Col md={4}>
                <FormGroup>
                    <Label for="exampleUsername">Username</Label>
                    <Input value={this.state.username} onChange={this.updateUsername} type="text" name="username" id="exampleUsername" placeholder="Enter username" />
                </FormGroup>
                </Col>
               <Col md={4}>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input value={this.state.password} onChange={this.updatePassword} type="password" name="password" id="examplePassword" placeholder="Enter password" />
                </FormGroup>
               
                <FormGroup check>
            <Label check>
                 <Input type="checkbox" id="checkbox2" />{' '}
                     Remember me
                 </Label>
                 
                 <Col md={10}>
                 <Button color='primary'>Login</Button>
                 </Col>
            </FormGroup>
            
                {/* <Button color='primary'>Login</Button> */}
                </Col>
                
                </Row>
                
            </Form>
            <p> {this.props.user.username}</p>
            </Jumbotron>
        </div>
        )
    }
}

