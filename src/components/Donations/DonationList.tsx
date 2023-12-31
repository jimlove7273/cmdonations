const DonationList = () => {
  return (
    <div className="bg-zinc-100">
      <div className="p-5 mx-5 mb-5 bg-white">
        <table className="w-full">
          <tr>
            <td>Date</td>
            <td>Friend</td>
            <td>Email</td>
            <td>Location</td>
            <td>Type</td>
            <td>Check #</td>
            <td>Amount</td>
          </tr>
          <tr>
            <td>2023-01-08</td>
            <td>3803-Christine Liu</td>
            <td>chrisliu22@yahoo.com</td>
            <td>South San Francisco, CA</td>
            <td>Love Offering</td>
            <td>PayPal</td>
            <td>$100.00</td>
          </tr>
          <tr>
            <td>2023-01-08</td>
            <td>16562-Peggy Lu</td>
            <td></td>
            <td>Hillsborough, NJ</td>
            <td>Love Offering</td>
            <td>PayPal</td>
            <td>$300.00</td>
          </tr>
          <tr>
            <td>2023-01-12</td>
            <td>990-Great Commission Church International</td>
            <td>ucchh@hotmail.com</td>
            <td>Hacienda Heights, CA</td>
            <td>Love Offering</td>
            <td>3114</td>
            <td>$4000.00</td>
          </tr>
          <tr>
            <td>2023-01-19</td>
            <td>990-Great Commission Church International</td>
            <td>ucchh@hotmail.com</td>
            <td>Hacienda Heights, CA</td>
            <td>Love Offering</td>
            <td>3117</td>
            <td>$4000.00</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default DonationList;