// @flow

import * as React from "react";
import './App.css';
import { Page, Card, Grid, Form, Button, Dropdown } from "tabler-react";

import SiteWrapper from "./SiteWrapper.react";
import MaterialTable from 'material-table';
import { } from 'material-icons';

function EventInfo() {
    return (
        <SiteWrapper>
            <Page.Content>
                <div class="Page">
                    <div class="EventInfo">
                        <MaterialTable
                            title="Event Info"
                            columns={[
                                { title: 'Event Name', field: 'eventName' },
                                { title: 'Venue Name', field: 'venueName' },
                                { title: 'Venue Address', field: 'venueAddress' },
                                { title: 'Event Date', field: 'eventDate' },
                                { title: 'Table Size', field: 'tableSize' },
                                { title: 'Expected Guests', field: 'expectedGuests' },
                                { title: '% of Empty Seats', field: 'emptyPercentage' },
                            ]}
                            data={query =>
                                new Promise((resolve, reject) => {
                                    let url = 'https://eagleeventplanningapi.azurewebsites.net/ep/events/11'
                                    fetch(url)
                                        .then(response => response.json())
                                        .then(result => {
                                            resolve({
                                                data: result,
                                            })
                                        })
                                })
                            }
                        />
                    </div>

                    <div class="SeatingArrangment">
                        <MaterialTable
                            title="Event Info"
                            columns={[
                                { title: 'Table Assignment', field: 'tableAssignment' },
                                { title: 'First Name', field: 'ftName' },
                                { title: 'Last Name', field: 'lName' },
                                { title: 'Role', field: 'role' },
                            ]}
                            data={query =>
                                new Promise((resolve, reject) => {
                                    let url = 'https://eagleeventplanningapi.azurewebsites.net/ep/eventseating/11'
                                    fetch(url)
                                        .then(response => response.json())
                                        .then(result => {
                                            resolve({
                                                data: result,
                                            })
                                        })
                                })
                            }
                        />
                    </div>

                </div>
            </Page.Content>
        </SiteWrapper>
    );
}

export default EventInfo();