import { Flex, Heading, theme } from '@chakra-ui/core';
import React from 'react';
import ContactCard from '../components/about/ContactCard';
import Content from '../components/about/Content';
import Image from '../components/Image';
import Layout from '../components/Layout';
import { MISSION_MESSAGE, WHO_WE_ARE_MESSAGE } from '../constants/about';

export default function About() {
  return (
    <Layout>
      <Flex align="center" justify="center" direction="column">
        <Flex
          w="100%"
          minH="260px"
          align="center"
          justify="center"
          zIndex="-1"
          backgroundColor="#000"
          color="#FFF"
        >
          <Image
            publicId="assets/people-protesting-on-street-4552840_gginry"
            cloudName="rebuild-black-business"
            pos="absolute"
            objectFit="cover"
            w="100%"
            h="100%"
            zIndex="-1"
            transforms={{
              gravity: 'auto',
            }}
          />
          <Heading>ABOUT</Heading>
        </Flex>
        <Flex w="100%" h="auto" backgroundColor={theme.colors['rbb-white']}>
          <Flex
            direction="column"
            align="center"
            justify="center"
            marginTop={[theme.spacing.base, theme.spacing.base, '0', '0']}
            marginBottom={[theme.spacing.base, theme.spacing.base, '0', '0']}
            marginLeft={['0', '0', '5%', '15%', '15%', '30%']}
            marginRight={['0', '0', '5%', '20%', '22%', '35%']}
          >
            <Content
              heading="MISSION"
              message={MISSION_MESSAGE}
              marginTop="31px"
              marginBottom="0"
              dividerMargin="101px"
            />
            <Content
              heading="WHO WE ARE"
              message={WHO_WE_ARE_MESSAGE}
              marginTop="48px"
              marginBottom="31px"
              dividerMargin="63px"
            />
          </Flex>
        </Flex>

        <Flex
          align="center"
          width="100%"
          minH="500px"
          justify="center"
          direction="column"
          backgroundColor="#DEDEDA"
        >
          <Heading as="h2" size="xl" paddingTop={['40px', '44px']}>
            CONTACT
          </Heading>
          <Flex
            maxW="1074px"
            w="100%"
            direction={['column', 'column', 'row', 'row']}
            paddingTop="32px"
            paddingBottom="32px"
          >
            <ContactCard
              modalCard
              title="Business Owner"
              modalTitle="This is a modal!"
              publicId="assets/contact-left"
              blurb="Add your business to our list"
            />
            <ContactCard
              mailtoCard
              title="General Inquiry"
              email="test@test.com"
              blurb="Send us an email and we'll be in touch"
              publicId="assets/contact-middle"
            />
            <ContactCard
              title="Volunteers"
              blurb="Join our group chat in Discord"
              publicId="assets/contact-right"
            />
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
}
