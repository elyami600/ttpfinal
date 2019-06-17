import React from 'react'
import './Form.css';

export  default class Form  extends React.Component{
    state = {
        campusName: '',
        campusLocation:'',
        campusImgUrl: '',
        campusDescription: '',

    }
    render() {
        return(

            <div className="main-form">
                <div className="inside-form">
                    <header>
                        <h1>Edit campus</h1>
                    </header>
                    <form >
                        <label>
                            Campus Name:
                        <input className="type" value={this.state.campusName}
                               onChange={e => this.setState({campusName: e.target.value})}
                        />
                        </label>
                        <br/>
                        <br/>

                        <label>
                            Campus Location:
                        <input
                               value={this.state.campusLocation}
                               onChange={e => this.setState({campusLocation: e.target.value})}
                        />
                        </label>
                        <br/>
                        <br/>
                        <label>
                            Campus Image Url:
                        <input
                               value={this.state.campusImgUr}
                               onChange={e => this.setState({ campusImgUr: e.target.value})}
                        />
                        </label>
                        <br/>
                        <br/>

                        <label>
                            Campus Description:
                            <textarea value={this.state.campusDescription}
                                      onChange={e => this.setState({ campusDescription: e.target.value})} />
                        </label>
                        <br/>
                        <br/>

                        <button className="myButtons">Save Change</button>

                        <br/>
                        <br/>
                        <br/>
                        <br/>



                        <label>
                            <h2>Students On Campus</h2>
                            <select>
                                <option value="lehmacollege">Lehma College</option>
                                <option value="bronxcommunitycollege">Bronx Community College</option>
                                <option value="hostoncolle">Hoston College</option>
                                <option value="citycollge">City College</option>
                                <option value="hunter">Hunter Collehge</option>


                            </select>
                        </label>

                        <button className="myButtons">Add Campus</button>

                    </form>
                </div>

            </div>

        );
    }

}
