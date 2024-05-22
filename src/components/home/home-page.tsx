import React, { useContext, useEffect, useState } from "react";
import { HouseList } from "./house-list";
import { House } from "../state/house";
import { Box, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../profile/login-form";
import { getUserData } from "./home-get-house";
import { HouseContext } from "../context/house-context";

export const HomePage = () => {
    const navigate = useNavigate();
    const [houses, setHouses] = useState<House[]>([]);
    const [isLogged, setIsLogged] = useState<boolean>(false);

    const context = useContext(HouseContext);
    if (!context) {
        throw new Error("MyComponent must be used within a UserProvider");
    }
    const { userHouse, setUserHouse } = context;

    useEffect(() => {
        const getHouses = async () => {
            const response = await fetch("http://localhost:5000/houses");
            setHouses(await response.json());
        }
        getHouses();
    }, [])

    useEffect(() => {
        console.log("Bejön");
        console.log(isLogged);
        if(isLogged){
            getUserData()
                .then((houseData) => {
                    console.log("HouseData")
                    console.log(houseData);
                    setUserHouse(houseData);
                    if(houseData === undefined) {
                        navigate("/sortinghat")
                    } else {
                        navigate("/profile")
                    }
                })
                .catch((error) => {
                    console.error(error);
            });
        }
        
    }, [isLogged, setIsLogged])

    return <Box>
        <VStack>
            <HouseList houses={houses}/>
            <LoginForm loggedIn={setIsLogged}/>
        </VStack>
    </Box>  
}
