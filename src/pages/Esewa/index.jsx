export default function Esewa() {
    return (
      <>
        <form action="https://uat.esewa.com.np/epay/main" method="POST">
          <input value="100" name="tAmt" type="hidden" />
          <input value="108" name="amt" type="hidden" />
          <input value="5" name="txAmt" type="hidden" />
          <input value="2" name="psc" type="hidden" />
          <input value="3" name="pdc" type="hidden" />
          <input value="EPAYTEST" name="scd" type="hidden" />
          <input
            value="ee2c3ca1-696b-4cc5-a6be-2c40d929d453"
            name="pid"
            type="hidden"
          />
          <input
            value="http://merchant.com.np/page/esewa_payment_success?q=su"
            type="hidden"
            name="su"
          />
          <input
            value="http://merchant.com.np/page/esewa_payment_failed?q=fu"
            type="hidden"
            name="fu"
          />
  
          <div className="" >
            <img
            className="img-thumbnail"
              width={100}
              src="data:image/png;base64,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"
              alt="img of esewa"
            />
          </div>
          <div className="py-3">Click here to pay using Esewa</div>
            <input class="my-2 mx-auto px-4 btn btn-dark" value="Pay" type="submit" />
        </form>
      </>
    );
  }
  