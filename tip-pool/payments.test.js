describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = '100'
      tipAmtInput.value = '20'
      
    });
  
    it('should create nested payment object on globally scoped allPayments obj submitPaymentInfo()', function () {
        submitPaymentInfo();
        createCurPayment();
  
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['payment1'].billAmt).toEqual('100');
      expect(allPayments['payment1'].tipAmt).toEqual('20');
      expect(allPayments['payment1'].tipPercent).toEqual(20);
     
    });
  
    it('should create a new object with on createCurPayment()', function () {
        let compareObj = {
            'tipAmt': "20", 
            'billAmt': '100', 
            'tipPercent': 20

        }
        createCurPayment();
  
      expect(createCurPayment()).toEqual(compareObj);
    });

    it('should take payment object and create a new row on appendPaymentTable()', function (){
        let compareObj ={
            payment1: {
            'tipAmt': "20", 
            'billAmt': '100', 
            'tipPercent': 20
            }
        }
        appendPaymentTable(compareObj);
        let row = document.querySelectorAll('#paymentTable tbody tr');

        expect(row.length).toEqual(1);

    });
    
    it('should update innerHTML of our gloablly scoped summaryTds list', function(){
        submitPaymentInfo();
        updateSummary();
        expect(summaryTds[0].innerHTML).toEqual('$100');
        expect(summaryTds[1].innerHTML).toEqual('$20');
        expect(summaryTds[2].innerHTML).toEqual('20%');
    })
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