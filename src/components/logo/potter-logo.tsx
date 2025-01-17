import React, { FC } from 'react';
import { Link as NavLink } from 'react-router-dom';
import { Heading, Link, Button, Flex } from '@chakra-ui/react';
import './potter-logo.css'; // CSS fájl importálása

const PotterHeader: FC = () => (
  <div className="header-container">
    <Flex
      className="potter-header" 
      alignItems="center"
      justifyContent="space-between"
      p={4}
      position="fixed"
      top={0}
      left={0}
      right={0}
    >
      <Link as={NavLink} to="/" _hover={{ textDecoration: "none" }}>
        <Flex alignItems="center">
          <Heading fontSize="2xl" fontFamily="HarryPotter" color="white">
            Harry
          </Heading>
          <Heading fontSize="2xl" fontFamily="HarryPotter" color="#white">
            Potter
          </Heading>
        </Flex>
      </Link>
      <Flex className="button-container">
        <Link as={NavLink} to="/login" _hover={{ textDecoration: "none" }}>
          <Button className="button" variant="ghost" colorScheme="white" mr={2} _hover={{ bg: "transparent" }}>Bejelentkezés</Button>
        </Link>
        <Link as={NavLink} to="/register" _hover={{ textDecoration: "none" }}>
          <Button className="button" variant="ghost" colorScheme="white" mr={2} _hover={{ bg: "transparent" }}>Regisztráció</Button>
        </Link>
        <Link as={NavLink} to="/update" _hover={{ textDecoration: "none" }}>
          <Button className="button" variant="ghost" colorScheme="white" mr={2} _hover={{ bg: "transparent" }}>Adatok módosítása</Button>
        </Link>
        <Link as={NavLink} to="/change-password" _hover={{ textDecoration: "none" }}>
          <Button className="button" variant="ghost" colorScheme="white" _hover={{ bg: "transparent" }}>Jelszó változtatás</Button>
        </Link>
      </Flex>
    </Flex>
  </div>
);

export default PotterHeader;
