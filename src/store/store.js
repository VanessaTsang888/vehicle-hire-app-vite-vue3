/*

https://vuex.vuejs.org/#what-is-a-state-management-pattern

Actions + Mutations + State:

State: -> I expect to get an Array of vehicles here.
Getters: -> we use getters in our components so we can get the current state: define some getters,
helper fn's that are going to get our state: allVehicles
Mutations: define mutations called GET_VEHICLES and will accept: state and vehicles. Mutations change our data.
This mutation will change data from empty to put data from our API into the vehicles variable (array). So mutations
will take  data from our actions and put it into vehicles Array.
Actions: methods. Define our method, commit it to our mutation, past the axios method from Home.vue here. Commit it to
get vehicles mutation and the mutation is going to accept our state which is the first arg and its going to get these vehicles
from response.data from this Actions method. Then it will set the state of vehicles to be vehicles (within the body of Mutations method).

 Use getterst Object to Get the current state:

   This mutation Object I've defined will accept the state and vehicles as args. This will change our data - put data from our API into our vehicles
   variable (within the state Object). Take data from Actions and put into vehicles Array.
   Set the state vehicles to vehicles.

 Define this method getVehicles, commit it.



*/

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
// import VehiclesList from '../components/VehicleList.vue';
// import router from './router';
// import { createNamespacedHelpers } from 'vuex';

Vuex.use(Vuex);

export default new Vuex.Store({
  state: {
    vehicles: [],
  },
  getters: {
    allVehicles: (state) => state.vehicles,
  },
  mutations: {
    GET_VEHICLES: (state, vehicles) => {
      state.vehicles = vehicles;
    },
  },
  //  Commit to our mutations:
  actions: {
    getVehicles({ commit }) {
      axios.get('http://localhost:3000/vehicles').then((response) => {
        commit('GET_VEHICLES', response.data);
      });
    },
  },
});
