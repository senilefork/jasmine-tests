describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should add rows serverTable', function () {
    submitServerInfo();
    //updateServerTable();

    let row = document.querySelectorAll('#serverTable tbody tr');
    expect(row.length).toEqual(1);

    
  });

  

  afterEach(function() {
    // teardown logic
    //serverNameInput.value = '';
    serverTbody.innerHTML = '';
    allServers = {};
    serverId = 0;
  });
});
