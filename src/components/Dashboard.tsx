import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

import '../App.css';
import DashboardBlock from './DashboardBlock';
import CastRulesTable from './CastRulesTable';
import Detail from './Detail';

// import { useState } from "react";
// import "./../styles.css";
// import Checkbox from "./checkbox";

const labels: string[] = [
  'feb. 2021',
  'march 2021',
  'april 2021',
  'may 2021',
  'june 2021',
  'jul. 2021',
  'aug. 2021'
];

// const [isCheckedA, setIsCheckedA] = useState(false);
// const handleChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
//   setIsCheckedA(e.target.checked);
// };

// const [isCheckedB, setIsCheckedB] = useState(false);
// const handleChangeB = (e: React.ChangeEvent<HTMLInputElement>) => {
//   setIsCheckedB(e.target.checked);
// };

export interface Measurements {
  label: string,
  dataPoints: number[],
  color: string,
}

export const dataColors = { blue: '#3B82F6', green: '#10B981' }

// CAST rules data
let castRulesColNames: string[] = ["#", "Advice", "Urgent"];
let castRulesLines: string[][] = [
  ["1", "Hire Engineers for product 1", "Yes"],
  ["2", "Hire Engineers for product 2", "Yes"],
  ["3", "Hire Comercials for product 2", "Yes"],
  ["4", "Fire Managers for product 1", "No"],
  ["5", "Hire Managers for product 2", "No"],
  ["6", "Fire Comercilas for product 1", "No"],
  ["7", "Advice 7", "No"],
  ["8", "Advice 8", "Yes"],
  ["9", "Advice 9", "No"],
  ["10", "Advice 10", "No"],
  ["11", "Advice 11", "No"],
];

// Key figures data

let figData = [
  { figure: 2, unit: "Managers", description: "Hire 2 manager" },
  { figure: 6, unit: "Technicians", description: "Hire 1 technician" },
  { figure: 7, unit: "HR", description: "Fire 3 HR" },
  { figure: 1, unit: "CTO", description: "No problem" },
  { figure: 1, unit: "CEO", description: "No problem" },
  { figure: 2, unit: "trader", description: "No problem" },
]

interface DashboardProps { }

interface DashboardState {
  loadingGcp: boolean,
  loadingGreespector: boolean,
  gcpData: Measurements,
  usersData: Measurements,
  dates: string[],
  showDetails: boolean,
  blockDetailShortName: string,
}

export default class Dashboard extends React.Component<DashboardProps, DashboardState> {
  constructor(props: DashboardProps) {
    super(props);
    this.state = {
      loadingGcp: true,
      loadingGreespector: true,
      gcpData: { label: 'GCP', dataPoints: [], color: '#3B82F6' },
      usersData: { label: 'user devices', dataPoints: [], color: '#10B981' },
      dates: [],
      showDetails: false,
      blockDetailShortName: ''
    };

    this.showDetailFunction = this.showDetailFunction.bind(this);
  }

  showDetailFunction(show: boolean, blockShortName: string) {
    if (show == false) {
      this.setState({ showDetails: show, blockDetailShortName: '' });
    } else {
      this.setState({ showDetails: show, blockDetailShortName: blockShortName });
    }
  }

  render() {
    if (this.state.showDetails) {
      // get details of the block to show
      let shortName = this.state.blockDetailShortName;
      // put switch statement here
      switch (shortName) {

        case "Business Viability":
          // show this block
          return (
            <Detail showDetail={this.showDetailFunction} title="Business Viability">
              <Row className="justify-content-md-center">
                <h1>
                  <blockquote className="blockquote text-center">
                  Business viability means that a business is / or has the potential to be successful. A viable business is profitable, which means it has more revenue coming in than it's spending on the costs of running the business.
                  If a business isn't viable, it's difficult to recover. The business would need to increase revenue, cut costs, or both. Viability is closely linked to profit as well as solvency and liquidity.
                  </blockquote>
                </h1>
              </Row>
              <img src="Performance_Analytics_img.png" className="img-fluid m-1" />
            </Detail>
          );

        case "Synergy":
          return (
            <Detail showDetail={this.showDetailFunction} title="Synergy">
              <img src="Synergy_img.png" className="img-fluid m-1" />
            </Detail>
          );

        case "Business Plan Reviewer":
          return (
            <Detail showDetail={this.showDetailFunction} title="Business Plan Reviewer">
              <img src="Business_Plan_Reviewer_img.png" className="img-fluid m-1" />
            </Detail>
          );

        case "Human Ressources":
          return (
            <Detail showDetail={this.showDetailFunction} title="Human Ressources">
              <CastRulesTable colNames={castRulesColNames} lines={castRulesLines.slice(0, 6)} />
            </Detail>
          );

        case "Customer Acquisition Strategy":
          return (
            <Detail showDetail={this.showDetailFunction} title="Customer Acquisition Strategy">
              <img src="Customer_Acquisition_Strategy_img.png" className="img-fluid m-1" />
            </Detail>
          );

        case "Organizational Structure":
          return (
            <Detail showDetail={this.showDetailFunction} title="Organizational Structure">
              <div className="App text-center">
                <h2>Divisional Organization</h2>
              </div>
              <img src="OS_divisional.png" className="img-fluid m-1" />
              <div className="App text-center">
                <h2>Functionnal Organization</h2>
              </div>
              <img src="OS_functionnal.png" className="img-fluid m-1" />
              <div className="App text-center">
                <h2>Flat Organization</h2>
              </div>
              <img src="OS_flat.png" className="img-fluid m-1" />
            </Detail>
          );

        case "Operations Optimization":
          return (
            <Detail showDetail={this.showDetailFunction} title="Operations Optimization">
              <img src="Operations_Optimization_img.png" className="img-fluid m-1" />
            </Detail>
          );

        case "Accounting Compliance":
          return (
            <Detail showDetail={this.showDetailFunction} title="Accounting Compliance">
              <img src="Accounting_Compliance_img.png" className="img-fluid m-1" />
            </Detail>
          );

        case "Legal":
          return (
            <Detail showDetail={this.showDetailFunction} title="Legal">
              <Row className="justify-content-md-center">
                <h1>
                  <blockquote className="blockquote text-center">
                    An investor will be more likely to invest in your firm if you have a clean legal history, which can only be achieved if taken care from the very first steps.
                  </blockquote>
                </h1>
              </Row>
              <img src="Legal_img_1.png" className="img-fluid m-1" />
              <Row>
                <Col sm>
                  <div className="App text-center">
                    <h4>
                      <div className="text-center">
                        <Row>
                          <div className="text-center">
                            <input type="checkbox" id="topping" name="topping" value="Paneer1" />Equity division
                          </div>
                          <div className="text-center">
                            <input type="checkbox" id="topping" name="topping" value="Paneer1" />Decision making
                          </div>
                          <div className="text-center">
                            <input type="checkbox" id="topping" name="topping" value="Paneer1" />Exiting process
                          </div>
                        </Row>
                      </div>
                    </h4>
                  </div>
                </Col>
                <Col sm>
                <div className="App text-center">
                    <h4>
                      <div className="text-center">
                        <Row>
                          <div className="text-center">
                            <input type="checkbox" id="topping" name="topping" value="Paneer1" />Sole Proprietorship
                          </div>
                          <div className="text-center">
                            <input type="checkbox" id="topping" name="topping" value="Paneer1" />General Partnership
                          </div>
                          <div className="text-center">
                            <input type="checkbox" id="topping" name="topping" value="Paneer1" />LLCs
                          </div>
                        </Row>
                      </div>
                    </h4>
                  </div>
                </Col>
                <Col sm>
                <div className="App text-center">
                    <h4>
                      <div className="text-center">
                        <Row>
                          <div className="text-center">
                            <input type="checkbox" id="topping" name="topping" value="Paneer1" />Patent and Trademark office
                          </div>
                          <div className="text-center">
                            <input type="checkbox" id="topping" name="topping" value="Paneer1" />International implications
                          </div>
                        </Row>
                      </div>
                    </h4>
                  </div>
                </Col>
                <Col sm>
                <div className="App text-center">
                    <h4>
                      <div className="text-center">
                        <Row>
                          <div className="text-center">
                            <input type="checkbox" id="topping" name="topping" value="Paneer1" />Stock issuance
                          </div>
                        </Row>
                      </div>
                    </h4>
                  </div>
                </Col>
              </Row>
              <img src="Legal_img_2.png" className="img-fluid m-1" />
              <Row>
                <Col sm>
                  <div className="App text-center">
                    <h4>
                      <div className="text-center">
                        <Row>
                          <div className="text-center">
                            <input type="checkbox" id="topping" name="topping" value="Paneer1" />Tax ID
                          </div>
                          <div className="text-center">
                            <input type="checkbox" id="topping" name="topping" value="Paneer1" />Tax incentives
                          </div>
                          <div className="text-center">
                            <input type="checkbox" id="topping" name="topping" value="Paneer1" />Small business specific Tax
                          </div>
                        </Row>
                      </div>
                    </h4>
                  </div>
                </Col>
                <Col sm>
                <div className="App text-center">
                    <h4>
                      <div className="text-center">
                        <Row>
                          <div className="text-center">
                            <input type="checkbox" id="topping" name="topping" value="Paneer1" />Statement of purpose
                          </div>
                          <div className="text-center">
                            <input type="checkbox" id="topping" name="topping" value="Paneer1" />Shareholders
                          </div>
                          <div className="text-center">
                            <input type="checkbox" id="topping" name="topping" value="Paneer1" />Amendment to the Bylaws
                          </div>
                        </Row>
                      </div>
                    </h4>
                  </div>
                </Col>
                <Col sm>
                <div className="App text-center">
                    <h4>
                      <div className="text-center">
                        <Row>
                          <div className="text-center">
                            <input type="checkbox" id="topping" name="topping" value="Paneer1" />Human Resources
                          </div>
                          <div className="text-center">
                            <input type="checkbox" id="topping" name="topping" value="Paneer1" />Patents, trademarks and certifications
                          </div>
                          <div className="text-center">
                            <input type="checkbox" id="topping" name="topping" value="Paneer1" />NDA
                          </div>
                        </Row>
                      </div>
                    </h4>
                  </div>
                </Col>
                <Col sm>
                <div className="App text-center">
                    <h4>
                      <div className="text-center">
                        <Row>
                          <div className="text-center">
                            <input type="checkbox" id="topping" name="topping" value="Paneer1" />Industry specific
                          </div>
                          <div className="text-center">
                            <input type="checkbox" id="topping" name="topping" value="Paneer1" />Location specific
                          </div>
                          <div className="text-center">
                            <input type="checkbox" id="topping" name="topping" value="Paneer1" />Personal data protection
                          </div>
                        </Row>
                      </div>
                    </h4>
                  </div>
                </Col>
              </Row>
            </Detail>
          );

      }
    }

    return (
      <Row>

        <Col sm={12} md={5} className="p-2">

          <DashboardBlock title="Business Viability" shortName="Business Viability" helpText="Details about Business Viability" showDetail={this.showDetailFunction}>
            <img src="Performance_Analytics_img.png" className="img-fluid m-1" />
          </DashboardBlock>

          <DashboardBlock title="Organizational Structure" shortName="Organizational Structure" helpText="Details about Organizational Structure" showDetail={this.showDetailFunction}>
            <img src="OS_divisional.png" className="img-fluid m-1" />
          </DashboardBlock>

          <DashboardBlock title="Synergy" shortName="Synergy" helpText="Details about Synergy" showDetail={this.showDetailFunction}>
            <img src="Synergy_img.png" className="img-fluid m-1" />
          </DashboardBlock>

          <DashboardBlock title="Business Plan Reviewer" shortName="Business Plan Reviewer" helpText="Details about Business Plan Reviewer" showDetail={this.showDetailFunction}>
            <img src="Business_Plan_Reviewer_img.png" className="img-fluid m-1" />
          </DashboardBlock>

          <DashboardBlock title="Human Ressources" shortName="Human Ressources" helpText="Details about Human Ressources" showDetail={this.showDetailFunction}>
            <CastRulesTable colNames={castRulesColNames} lines={castRulesLines.slice(0, 6)} />
          </DashboardBlock>

        </Col>

        <Col sm={12} md={7} className="p-2">

          <DashboardBlock title="Legal" shortName="Legal" helpText="Details about Legal" showDetail={this.showDetailFunction}>
            <img src="Legal_img.png" className="img-fluid m-1" />
          </DashboardBlock>

          <DashboardBlock title="Customer Acquisition Strategy" shortName="Customer Acquisition Strategy" helpText="Details about Customer Acquisition Strategy" showDetail={this.showDetailFunction}>
            <img src="Customer_Acquisition_Strategy_img.png" className="img-fluid m-1" />
          </DashboardBlock>

          <DashboardBlock title="Operations Optimization" shortName="Operations Optimization" helpText="Details about Operations Optimization" showDetail={this.showDetailFunction}>
            <img src="Operations_Optimization_img.png" className="img-fluid m-1" />
          </DashboardBlock>

          <DashboardBlock title="Accounting Compliance" shortName="Accounting Compliance" helpText="Details about Accounting Compliance" showDetail={this.showDetailFunction}>
            <img src="Accounting_Compliance_img.png" className="img-fluid m-1" />
          </DashboardBlock>

        </Col>

      </Row>
    );
  }
}