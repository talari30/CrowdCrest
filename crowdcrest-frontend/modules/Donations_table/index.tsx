import { JSX } from "react";
import styles from "./Donations_table.module.css"; // optional CSS

interface Donations {
    transactionId: number;
    organizerId: number;
    organizerFirstName: string;
    organizerLastName: string;
    fundName: string;
    target: number;
    transactionTime: Date;
    amount: number;
    backers: number;
  }

interface DonationsProps {
  donations: Donations[];
}

const DonationsTable = ({ donations }: DonationsProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <h2>Donations You Made</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Fund Name</th>
            <th>Organizer</th>
            <th>Amount Donated</th>
            <th>Backers</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation) => (
            <tr key={donation.transactionId}>
              <td>{donation.fundName}</td>
              <td>{donation.organizerFirstName} {donation.organizerFirstName}</td>
              <td>${donation.amount}</td>
              <td>{donation.backers}</td>
              <td>{new Date(donation.transactionTime).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonationsTable;
