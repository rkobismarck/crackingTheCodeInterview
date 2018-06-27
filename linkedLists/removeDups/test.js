'use strict';
var app = require('./removeDups.js');
var assert = require('assert');
var expect = require('chai').expect

describe('Validate that we are able to remove duplicates from a linked list.', () => {
    let mock = {
        "data": "HP",
        "next": {
            "data": "HPE",
            "next": {
                "data": "IBM",
                "next": {
                    "data": "HP",
                    "next": {
                        "data": "Apple Computer Inc.",
                        "next": null
                    }
                }
            }
        }
    };

    let expected = {
        "data": "HP",
        "next": {
            "data": "HPE",
            "next": {
                "data": "IBM",
                "next": {
                    "data": "Apple Computer Inc.",
                    "next": null
                }
            }
        }
    };

    it('It should be able a linked list version without items dups.', () => {
        expect(expected).to.deep.equal(app.performDuplicatesRemoval(mock))
    });
});

describe('Validate that we are able to remove duplicates from a linked list.', () => {
    let mock = {
        "data": "HP",
        "next": {
            "data": "HPE",
            "next": {
                "data": "IBM",
                "next": {
                    "data": "HPE",
                    "next": {
                        "data": "Apple Computer Inc.",
                        "next": null
                    }
                }
            }
        }
    };

    let expected = {
        "data": "HP",
        "next": {
            "data": "HPE",
            "next": {
                "data": "IBM",
                "next": {
                    "data": "Apple Computer Inc.",
                    "next": null
                }
            }
        }
    };
    
    it('It should be able a linked list version without items dups.', () => {
        expect(expected).to.deep.equal(app.performDuplicatesRemoval(mock))
    });
});


describe('Validate that we are able to remove duplicates from a linked list.', () => {
    let mock = {
        "data": "HP",
        "next": {
            "data": "HP",
            "next": {
                "data": "IBM",
                "next": {
                    "data": "HPE",
                    "next": {
                        "data": "HP",
                        "next": null
                    }
                }
            }
        }
    };

    let expected = {
        "data": "HP",
        "next": {
            "data": "IBM",
            "next": {
                "data": "HPE",
                "next": null
            }
        }
    };
    
    it('It should be able a linked list version without items dups.', () => {
        expect(app.performDuplicatesRemoval(mock)).to.deep.equal(expected)
    });
});

describe('Validate that we are able to remove duplicates from a linked list.', () => {
    let mock = {
        "data": "HP",
        "next": {
            "data": "HP",
            "next": null
        }
    };

    let expected = {
        "data": "HP",
        "next": null
    };
    
    it('It should be able a linked list version without items dups.', () => {
        expect(app.performDuplicatesRemoval(mock)).to.deep.equal(expected)
    });
});


describe('Validate that we are able to remove duplicates from a linked list.', () => {
    let mock = {
        "data": "HP",
        "next": {
            "data": "HPE",
            "next": null
        }
    };

    let expected = {
        "data": "HP",
        "next": {
            "data": "HPE",
            "next": null
        }
    };
  
    it('It should be able a linked list version without items dups.', () => {
        expect(app.performDuplicatesRemoval(mock)).to.deep.equal(expected)
    });
});

describe('Validate that we are able to remove duplicates from a linked list.', () => {
    let mock = {
        "data": "HPE",
        "next": {
            "data": "HPE",
            "next": {
                "data": "Apple Computer Inc.",
                "next": null
            }
        }
    };

    let expected = {
        "data": "HPE",
        "next": {
            "data": "Apple Computer Inc.",
            "next": null
        }
    };
    
    it('It should be able a linked list version without items dups.', () => {
        expect(expected).to.deep.equal(app.performDuplicatesRemoval(mock))
    });
});

describe('Validate that we are able to remove duplicates from a linked list.', () => {
    let mock = {
        "data": "HPE",
        "next": {
            "data": "HPE",
            "next": {
                "data": "Apple Computer Inc.",
                "next": null
            }
        }
    };

    let expected = {
        "data": "HPE",
        "next": {
            "data": "Apple Computer Inc.",
            "next": null
        }
    };
    
    it('It should be able a linked list version without items dups.', () => {
        expect(expected).to.deep.equal(app.performDuplicatesRemoval(mock))
    });
});
