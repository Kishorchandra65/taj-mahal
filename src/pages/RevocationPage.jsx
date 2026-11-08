export default function RevocationPage() {
  return (
    <main style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-main)' }}>
      <div className="container legal-container">
        <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>
          Widerrufsbelehrung
        </h1>
        <p className="legal-subtitle">Contract between the restaurant and customer</p>

        <div className="legal-content">
          <h2>1. Contract Conclusion</h2>
          <p>
            The contract between the restaurant and the customer is effectively concluded as soon as the customer places the order on the platform at the end of the ordering process and the button “Order now” after receipt of the order, Tajmahal will electronically confirm the order to the customer in the order.
          </p>
          <p>
            The restaurant is entitled to cancel the order if the offer is no longer available, if the customer has provided an incorrect or non-working telephone number or other contact information or if a case of force majeure of the contract can be executed by the restaurant only if the customer has correct and complete contact and address information available when placing the order. The customer is obliged to immediately report all inaccuracies of the information (including the payment data) that have been transmitted to Tajmahal or the restaurant.
          </p>

          <h2>2. Delivery & Pickup</h2>
          <p>
            If Tajmahal delivers the order on behalf of the restaurant, Tajmahal may charge the customer for delivery costs. The current delivery costs are specified on the platform before a customer an order. A receipt for the delivery costs can be requested from Tajmahal.
          </p>
          <p>
            If the customer has the order delivered, the customer must be present at the specified delivery address in order to receive the delivery of the order. If the customer wishes to collect the order, he should be present at the selected time at the pick-up location of the restaurant, as indicated in the confirmation email, SMS or on the platform.
          </p>

          <h2>3. Rejection of Orders</h2>
          <p>
            In view of the perishability of the offer, the customer is not permitted to terminate the contract. Orders cannot be resolved by the customer compared to Tajmahal. Cancellation of the order to the restaurant is only possible for the customer if the restaurant expressly states that a cancellation of the order by the customer is possible.
          </p>
          <p>
            If the Customer places an incorrect order (e.g. by providing incorrect contact information by not paying or not present at the place of delivery or collection to receive the order) or otherwise fails to comply with its obligations under the Agreement, Tajmahal is entitled to refuse future orders from that Customer.
          </p>

          <h2>4. Right of Revocation (Widerrufsrecht)</h2>
          <p>
            The customer cannot revoke the order to the restaurant, insofar as it is the delivery of goods that are not pre-made and for the production of which an individual selection or determination by the consumer is decisive or which are clearly tailored to the personal needs of the consumer (§ 312g para. 2 No. 1 BGB); which can spoil quickly or whose expiry date would be quickly exceeded (§ 312g para. 2 No. 2 BGB); which, for reasons of health protection or hygiene, are not suitable for return if their seal has been removed after delivery (§ 312g 2 No. 3 BGB); if, on the basis of their nature, these were inseparably mixed with other goods after delivery (§ 312g para. 2 No. 4 BGB).
          </p>
          
          <h2 style={{ marginTop: '3rem' }}>Revocation Policy (Widerrufsbelehrung)</h2>
          <p>
            You have the right to withdraw from the contract with the restaurant within fourteen days without giving reasons. The withdrawal period is fourteen days from the day on which you or a third party named by you, who is not the carrier, have taken possession of the goods.
          </p>
          <p>
            To exercise your right of withdrawal, you must comply with Tajmahal, Bloherfelder Str. 66, 26129 Oldenburg Owner: Mr. Baljinder Singh, E-Mail: bagaoldenburg@gmail.com) by means of a clear statement (e.g. B. inform a letter sent by post or e-mail) of your decision to withdraw from the contract with the restaurant. In order to meet the withdrawal period, it is sufficient that you send the notification of the exercise of the right of withdrawal before the expiry of the withdrawal period.
          </p>
        </div>
      </div>
    </main>
  );
}