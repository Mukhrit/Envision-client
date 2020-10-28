import React from 'react';
import classNames from 'classnames';
import { Line, Bar } from 'react-chartjs-2';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
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
    const contests = this.props.contests;

    function formatDate(date) {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [year, month, day].join('-');
    }

    contests.sort((a, b) => {
      //end dates
      var mydate1 = formatDate(a.time.end.substring(0, a.time.end.length - 9));
      var mydate2 = formatDate(b.time.end.substring(0, b.time.end.length - 9));
      var compdate1 = mydate1 + a.time.end.substring(a.time.end.length - 9);
      var compdate2 = mydate2 + b.time.end.substring(b.time.end.length - 9);
      var date1Updated = new Date(compdate1.replace(/-/g, '/'));
      var date2Updated = new Date(compdate2.replace(/-/g, '/'));

      //start dates
      var mydate1s = formatDate(
        a.time.start.substring(0, a.time.start.length - 9)
      );
      var mydate2s = formatDate(
        b.time.start.substring(0, b.time.start.length - 9)
      );
      var compdate1s =
        mydate1s + a.time.start.substring(a.time.start.length - 9);
      var compdate2s =
        mydate2s + b.time.start.substring(b.time.start.length - 9);
      var date1Updateds = new Date(compdate1s.replace(/-/g, '/'));
      var date2Updateds = new Date(compdate2s.replace(/-/g, '/'));

      if (date1Updated === date2Updated) return date1Updateds - date2Updateds;
      return date1Updated - date2Updated;
    });

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
                                <a
                                  href={contestobj.desc.substring(5)}
                                  style={{
                                    textDecoration: 'none',
                                  }}
                                >
                                  {contestobj.title}
                                </a>
                              </p>
                              <p>
                                {contestobj.location
                                  .substring(0, contestobj.location.length - 4)
                                  .charAt(0)
                                  .toUpperCase() +
                                  contestobj.location
                                    .substring(
                                      0,
                                      contestobj.location.length - 4
                                    )
                                    .slice(1)}
                              </p>
                              <p>
                                <span>
                                  Start Time : {contestobj.time.start} (UTC)
                                  <br />
                                  End Time : {contestobj.time.end} (UTC)
                                </span>
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
