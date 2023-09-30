function Staff(_account, _name, _email, _password, _startDate, _position, _baseSalary, _workTime) {
    this.account = _account;
    this.name = _name;
    this.email = _email;
    this.password = _password;
    this.startDate = _startDate;
    this.position = _position;
    this.baseSalary = _baseSalary;
    this.workTime = _workTime;

    this.calculateSalary = function() {
        switch (this.position) {
            case POSITION_DIRECTOR: return this.baseSalary * 3;
            case POSITION_LEADER:  return this.baseSalary * 2;
            case POSITION_STAFF:  return this.baseSalary;
            default: break;
        }
    }

    this.evaluate = function() {
        if (this.workTime >= RATE_OUTSTANDING_BREAKPOINT) {
            return RATE_OUTSTANDING;
        } else if (this.workTime >= RATE_EXCELLENT_BREAKPOINT) {
            return RATE_EXCELLENT;
        } else if (this.workTime >= RATE_GOOD_BREAKPOINT) {
            return RATE_GOOD;
        } else {
            return RATE_NORMAL;
        }
    }

    this.rate = this.evaluate();
    this.salary = this.calculateSalary();
}
