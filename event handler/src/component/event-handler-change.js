import React, { Component } from 'react';
import '../styles/main.scss'

class Eventhandler2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'mehdi',
            city: "",
            gender: "female",
            color: '#00fc12',

        }

    }
namechangehandler = (event) => {
    this.setState({ name: event.target.value.toUpperCase() })
}
citychangehandler = (event) => {
    this.setState({ city: event.target.value })
}
genderchangehandler = (event) => {
    this.setState({ gender: event.target.value });

}
colorchangehandler = (event) => {
    this.setState({ color: event.target.value })
}
submithandler = (event) => {
    event.preventDefault();
    console.log(this.state.name)
    console.log(this.state.city)
    console.log(this.state.gender)
    console.log(this.state.color)
}
render() {
    const { name, city, gender, color } = this.state;

    return (
        <form onSubmit={this.submithandler}>
            <div className='form-control'>
                <label htmlFor="input1">name :</label>
                <input type="text" id="input1" value={name} onChange={this.namechangehandler} />
                <p>{name}</p>
            </div>
            <div className='form-control'>
                <label htmlFor="input2">City :</label>
                <select id="input2" value={city} onChange={this.citychangehandler}>
                    <option value="tehran">تهران</option>
                    <option value="malayer">ملایر</option>
                    <option value="arak">اراک</option>
                    <option value="qom">قم</option>
                    <option value="esfehan">اصفهان</option>
                    <option value="hamedan">همدان</option>
                </select>
                <p>{city}</p>
            </div>

            <div className='form-control'>
                <label htmlFor="radio">gender:</label>
                <label htmlFor="radio1">male</label>
                <input type="radio" name="gender" onChange={this.genderchangehandler} value='male' checked={gender === "male"} />
                <label htmlFor="radio2">female</label>
                <input type="radio" name="gender" onChange={this.genderchangehandler} value='female' checked={gender === "female"} />
                <p>{this.state.gender}</p>
            </div>
            <div className='form-control'>
                <input type="color" value={color} onChange={this.colorchangehandler} />
                <p style={{ color: `${color}` }}>{color}</p>
            </div>
            <div className='form-control'>
                <input type="submit" value="Register" />
            </div>
        </form>);
}
}

export default Eventhandler2;
