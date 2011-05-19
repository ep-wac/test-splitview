describe('test with jasmine-jquery', function () {
  it('should load many fixtures into DOM', function () {
    loadFixtures('href_1.html');
    expect($('#jasmine-fixtures')).toContain('a');
  });

  it('should only return fixture', function () {
    var fixture = readFixtures('href_1.html');
    expect(fixture).toContain('a');
  });
});
