https://vuex.vuejs.org/

What is Vuex?
Vuex is a state management pattern + library for Vue.js applications.

- State management: the way you would manage your data.
- Pattern mean its a way of writting your code.
- vuex comes with some helpers to help you manage your data.

The most basic state management pattern is:

const Counter = {
// state
data () {
return {
count: 0
}
},
// view
template: `<div>{{ count }}</div>`,
// actions
methods: {
increment () {
this.count++
}
}
}

createApp(Counter).mount('#app')

---

So the data() is the State which is currently 0 as the count is 0.
Now we render that state on our View, and the View shows 0.
Now, we want to do some Actions which are our methods: {......} So when user clicks a btn, and an action triggers and adds 1 to the 0.
Then the State is changed through that action and our View is rendered again and it displays 1.
This great if we are building something simple we have just couple of Vue Components we don't need Vuex for a simple project.
but we need Vuex as our project is complex.

Vuex is just single point of truth for our app so Vuex will store our data and will be available to all of our Components and once one component changes some
data the other components will be aware of it and react to it properly. The Vuex consists of Actions, Mutations and State, so State will render our component
and show as 0 (the counter starts at 0).
Mutations is a way of saying changing your data or mutating your data then mutations mutate your data, update your State and then our component is
rendered again. All components will be aware of changes in the data.

The Problem and How to Solve It Using Vuex:

- We want to past the data from Home.vue -> axios.get() to our VehicleList component. We need to create some state for our Home.vue
  -> data() {....}
  -> This will accept vehicles as an Array and we want to set all vehicles once we get all the data from our API into that vehicles Array within the data() object:
  -> this.vehicles = response.data
  Now pass our data to our component -> Home.vue -> <template> -> <vehicle-list />
- Now we need to pass data from Home.vue parent component to the VehicleList.vue child component. To do this we need to use props.
- Go to Vehicle List and display the data.

Using Vuex:
Current approach without Vuex is ok if app is not going to get more complex. However, this app will grow over time so we will use Vuex now.
Example, we are going to have multiple views so we'll be using Vuex. Keep data centralised and to pass data to all components and components be aware of all the changes.
How we do the same example but using Vuex.

vuex is Actions + Mutations + State:
See the diagram on https://vuex.vuejs.org

- State is the state of our app and state of our data.
- in the store.js file.
- The state is what we define in Home.vue -> data() Object -> return: vehicles: []
- store.js -> state: we expect to get an array of vehicles here.
  State: -> I expect to get an Array of vehicles here.
  ->
  Getters: -> we use getters in our components so we can get the current state: define some getters,
  helper fn's that are going to get our state: allVehicles

Mutations: define mutations called GET_VEHICLES and will accept: state and vehicles. Mutations change our data.
This mutation will change data from empty to put data from our API into the vehicles variable (array). So mutations
will take data from our actions and put it into vehicles Array.

Actions: methods. Define our method, commit it to our mutation, past the axios method from Home.vue here. Commit it to
get vehicles mutation and the mutation is going to accept our state which is the first arg and its going to get these vehicles
from response.data from this Actions method. Then it will set the state of vehicles to be vehicles (within the body of Mutations method).

At the top of this store.js -> import axios. Save and test/
Home.vue -> remove the import axios.
Remove the data() Object, and the mounted() method.

In VehiclesList component -> export default: remove props.

- Write a computed object, write vehicles() method, and a return keyword -> pull-in the the GETTER method we defined earlier: allVehicles
- Display all vehicles when component is mounted so in his component, write a mounted() method and dispatch an action to our store so that
  fills our state with data fro our API: this.$store.dispatch('getVehicles')
  so will dispatch/run that action (inside of actions object in store.js) to our store and that is called getVehicles. Then the mutation will
  add that new data/mutate the empty Array to filled Array with names of the registration_numbers (vehicles ID's).
- Home.vue -> html custom tag: vehicles-list -> remove the prop: vehicles="vehicles"
- as we don't need this anymore since we are getting our data from Vuex now.
- Test in UI. Should get what we had in first example -> registration_numbers from the vehicles endpoint.
- Install Vue Developer tools in Chrome extensions. Then go to Vue -> click the State icon: look at the Base State, there are our state
  and getters. Can inspect the State: So we can see when we change state, this also will change.

  Setup and used Vuex but my data is not returning and can't display the registration numbers on the screen:

- Error in console tab:
  vuex.esm-bundler.js:1013 [vuex] unknown action type: getVehicles
  I've googled this errorb but no luck:

https://stackoverflow.com/questions/63574381/vuex-unknown-action-type
