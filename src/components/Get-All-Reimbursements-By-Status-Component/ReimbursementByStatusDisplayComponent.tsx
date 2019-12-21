import { Table, Form, FormGroup, Label, Input, Button } from "reactstrap";
import React, { SyntheticEvent } from "react";
import { Reimbursement } from "../../models/reimbursement";
import { RouteComponentProps, Redirect } from "react-router";
import { ReimbursementByStatusDisplayRowComponent } from "./reimbursement-by-status-display-row/ReimbursementByStatusDisplayRowComponent";
import { getReimbursementByStatus } from "../../remote/reimbursements-clients/reimbursements-by-status";

interface IReimbursementDisplayProps extends RouteComponentProps {
    reimbursement: Reimbursement[]
  reimbursementID: (id: number) => void
}

//  interface IReimbursementsDisplayState {
//     allReimbursements: Reimbursement[],
//     id: number
// }

export class ReimbursementsByStatusDisplayComponent extends React.Component<IReimbursementDisplayProps,any >{

    constructor(props: any) {
        super(props)
       this.state = {
            id:undefined
        }
    }
    // async componentDidMount() {
    //     try {
    //         let r = await getReimbursementByStatus(this.props.reimbursement.reimbursementId)
    //         if (r.status === 200) {
    //             this.setState({
    //                 ...this.state,
    //                 allReimbursements: r.body
    //             })
    //         }
    //     } catch (e) {
    //         console.log(e);

    //     }
    // }

    updateId = (e: any) => {
        this.setState({
            ...this.state,
            id: e.target.value
        })
    }
    submitId = async (e: SyntheticEvent) => {
        e.preventDefault()
        
        this.props.reimbursementID(this.state.id)
    }
    

    render() {
        let rows = this.props.reimbursement.map((e) => {
            return <ReimbursementByStatusDisplayRowComponent reimbursement={e} key={'reimbursement' + e.reimbursementId} />
        })
        return (

            <div>
                <Form onSubmit={this.submitId}>
                    <FormGroup>
                        <Label for="exampleID">ID</Label>
                        <Input value={this.state.id} onChange={this.updateId} type="number" name="ID" id="exampleID" placeholder="with a placeholder" />
                    </FormGroup>
                    <Button color='danger'>Submit</Button>
                </Form>
                <Table bordered color='danger'>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Author</td>
                            <td>Amount</td>
                            <td>Date Submitted</td>
                            <td>Description</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>

            </div>



        )
    }
}