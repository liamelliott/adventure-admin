import React from 'react';

import axios from 'axios';
import App, { normalizeContacts } from '../App';

describe('<App />', () => {
    describe('.handleSearch', () => {
        it('should call axios.get twice', () => {

            axios.get.mockImplementationOnce(() => Promise.resolve({
                "Items": {
                    "$values": [
                        { "Id": 28681, "Name": "Liam Elliott", "Email": "lelliott@alpineclubofcanada.ca" }
                    ]
                }
            })).mockImplementationOnce(() => Promise.resolve({
                "Items": {
                    "$values": [
                        { "Id": 207406, "Name": "Alexander Elliott", "Email": "alexander.s.elliott@gmail.com" },
                        { "Id": 28681, "Name": "Liam Elliott", "Email": "lelliott@alpineclubofcanada.ca" }
                    ]
                }
            }));

            const query = "Liam Elliott";
            const app = new App();

            app.handleSearch(query).catch((error) => {
                console.error(`Error occurred: ${error}`)
            });

            expect(axios.get).toHaveBeenCalledTimes(2);
        });
    });

    describe('normalizeContacts', () => {
        it('should normalize to correct contact form', () => {
            const response = {
                "Items": {
                    "$values": [
                        { "Id": 207406, "Name": "Alexander Elliott", "Email": "alexander.s.elliott@gmail.com" },
                        { "Id": 28681, "Name": "Liam Elliott", "Email": "lelliott@alpineclubofcanada.ca" }
                    ]
                }
            };

            const data = normalizeContacts(response);

            expect(data).toEqual(expect.arrayContaining([
                { id: 28681, name: 'Liam Elliott', email: 'lelliott@alpineclubofcanada.ca' },
                { id: 207406, name: 'Alexander Elliott', email: 'alexander.s.elliott@gmail.com' }
            ]));
        });
    });
});