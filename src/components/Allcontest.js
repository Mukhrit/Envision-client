import React from 'react';
import classNames from 'classnames';
import { Line, Bar } from 'react-chartjs-2';
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap';

class Allcontest extends React.Component {
  render() {
    console.log(this.props);
    const contests = this.props.contests;
    return (
      <Row>
        <Col lg='6' md='12'>
          <Card className='card-tasks'>
            <CardHeader>
              <h6 className='title d-inline'>Contests({contests.length})</h6>
              <p className='card-category d-inline'> today</p>
            </CardHeader>
            <CardBody>
              <div className='table-full-width table-responsive'>
                <Table>
                  <tbody>
                    <tr>
                      {contests.map((contestobj) => {
                        return (
                          <div>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue='' type='checkbox' />
                                  <span className='form-check-sign'>
                                    <span className='check' />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className='title'>
                                {contestobj.title}
                                <br />
                                Location :
                                <a href={contestobj.desc.substring(5)}>
                                  {contestobj.desc.substring(5)}
                                </a>
                              </p>
                              <p className='text-muted'>
                                {contestobj.location}
                              </p>
                            </td>
                            <td className='td-actions text-right'>
                              <Button
                                color='link'
                                id='tooltip636901683'
                                title=''
                                type='button'
                              >
                                <i className='tim-icons icon-pencil' />
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                target='tooltip636901683'
                                placement='right'
                              >
                                Edit Task
                              </UncontrolledTooltip>
                            </td>
                          </div>
                        );
                      })}
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default Allcontest;
