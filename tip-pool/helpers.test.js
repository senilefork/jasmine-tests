describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = '100'
      tipAmtInput.value = '20'

      
    });
  
    it('should sum the total of our allPayments object key values on sumPaymentsTotal()', function () {
        submitPaymentInfo();
        createCurPayment();
        updateSummary()
        expect(sumPaymentTotal('billAmt')).toEqual(100);
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
      
    });
  
    it('should calculate tip percent given bill and tip amount on calculateTipPercent()', function(){
        createCurPayment()

        expect(calculateTipPercent(100,20)).toEqual(20);
    });

    it('should append a new data element to a given table row on appendTd()', function(){
        let newTr = document.createElement('tr');

        appendTd(newTr,'table row');
        expect(newTr.children.length).toEqual(1);
    });
       
   afterEach(function() {
      // teardown logic
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      for(let d of summaryTds){
          d.innerHTML = '';
      }
      allPayments = {};
    });
  });