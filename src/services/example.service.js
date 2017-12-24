import Service from './service';

class ExampleService extends Service {
    constructor() {
        super();
    }

    /**
     * Return a example message
     * @returns {string}
     */
    getExample() {
        return 'This is a example :)';
    }
}

export default new ExampleService();