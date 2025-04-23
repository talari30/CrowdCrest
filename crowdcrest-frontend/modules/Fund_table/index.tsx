'use client';

import { JSX } from "react";
import styles from "./Fund_table.module.css";

interface Fund {
  donationId: number;
  fundName: string;
  target: number;
  deadline: string;
  amountReceived: number;
  backers: number;
}

interface FundTableProps {
  funds: Fund[];
}

const FundTable = ({ funds }: FundTableProps): JSX.Element => {
  return (
    <div className={styles.fundTableContainer}>
      <h2>Funds You Started</h2>
      <table className={styles.fundTable}>
        <thead>
          <tr>
            <th>Fund Name</th>
            <th>Target</th>
            <th>Deadline</th>
            <th>Amount Received</th>
            <th>Backers</th>
          </tr>
        </thead>
        <tbody>
          {funds.map((fund) => (
            <tr key={fund.donationId}>
              <td>{fund.fundName}</td>
              <td>${fund.target}</td>
              <td>{new Date(fund.deadline).toLocaleDateString()}</td>
              <td>${fund.amountReceived ?? 0}</td>
              <td>{fund.backers}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FundTable;