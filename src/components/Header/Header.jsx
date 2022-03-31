import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {Testa} from '../Testa/Testa'

const Header  = () => {


    alert(1);
    var [value, setValue] = React.useState('1');

    var handleChange = (event, newValue) => {
        setValue(newValue);
    };

        return (
            <div>
                <NavLink to="/">
                    Main32
                </NavLink>

                <NavLink to="/tech">
                    Used technologiess2ss
                </NavLink>

                <NavLink to="/questions">
                    Questions223232d
                </NavLink>
                This is header
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Православие" value="1" />
                                <Tab label="Католицизм" value="2" />
                                <Tab label="Протестантизм" value="3" />
                                <Tab label="Мусульманство" value="4" />
                                <Tab label="Атеизм" value="5" />
                            </TabList>
                        </Box>
                        <TabPanel value="1"></TabPanel>
                        <TabPanel value="2">{<Testa/>}</TabPanel>
                        <TabPanel value="3">Item Three</TabPanel>
                        <TabPanel value="4">Item 4</TabPanel>
                        <TabPanel value="5">Item 5</TabPanel>
                    </TabContext>
                </Box>
            </div>

        );
}

export default Header;