import React, {useState} from 'react';
import './App.css';

const App = () => {

    const [name, setName] = useState("")
    const [userInfo, setUserInfo] = useState({})
    const handleChange = e => setName(e.target.value);
    const handleClick = () => {

        fetch(`https://api.github.com/users/${name}`)
            .then((res => res.json()))
            .then(data => setUserInfo(data))
    }

    return (
        <div className="App">
            <h1>Github User Information</h1>
            <div className={'form'}>
                <input type='text' value={name} onChange={handleChange} className={'text-box'}/>
                <input type='button' onClick={handleClick} value={'Submit'} className={'button'}/>
            </div>

            {Object.keys(userInfo).length > 0 && <div className={'table'}>
                <table>
                    <tbody>
                    {Object.entries(userInfo).map(([k, v], i) => {
                        return <tr key={i}>
                            <td>{k}</td>
                            <td>{v}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>}
        </div>
    );
}

export default App;
