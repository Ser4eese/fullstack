--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: phonebook; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.phonebook (
    first_name character varying NOT NULL,
    address character varying NOT NULL,
    last_name character varying NOT NULL,
    phone integer NOT NULL,
    email character varying NOT NULL,
    datereg date NOT NULL,
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL
);


ALTER TABLE public.phonebook OWNER TO postgres;

--
-- Data for Name: phonebook; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.phonebook (first_name, address, last_name, phone, email, datereg, id) FROM stdin;
Elora	16065 Veith Court	Willmot	924868840	ewillmot0@ibm.com	2021-04-16	a640ffb8-bf68-4a62-b336-ca49228da9f2
Fredrika	27463 Moulton Road	Grimoldby	233715155	fgrimoldby1@cpanel.net	2020-06-15	2bccbfe9-30b5-4036-963b-01397b0fa109
Neville	6399 Birchwood Way	Dinse	718226213	ndinse2@amazon.co.uk	2020-10-11	7f3f031d-fed6-47e9-a141-3fa38fb4a03c
Ozzie	7673 Jay Court	Stains	712646148	ostains3@dot.gov	2021-04-28	43aabfeb-5480-4d32-b0e8-c6208558fb80
Erminia	6 Delladonna Terrace	Trotton	661849081	etrotton4@deviantart.com	2021-04-21	21897fc4-9857-495b-801c-37e4d36248c4
Creight	09 Forest Junction	Blabber	552905522	cblabber5@topsy.com	2020-08-12	20e12daa-0ef1-4c59-a94e-896bc65c6442
Borg	5351 Jenifer Point	Gange	223945007	bgange6@acquirethisname.com	2020-07-26	b3a3b570-4580-4756-ae16-1cee2e5dab3b
Agnola	3586 Brown Street	Bresson	669905746	abresson7@sfgate.com	2020-07-11	afe69fda-7bd0-40f7-b27d-b1a37b4ef8e8
Marshall	9 Dahle Terrace	Blanshard	303501826	mblanshard8@wp.com	2021-03-11	dd6cb942-c4b9-4041-be27-26df01916aac
Faustina	2560 Mallard Junction	Shitliffe	776279482	fshitliffe9@163.com	2020-10-11	108affa9-f5c4-45cb-990d-1862036400aa
Claudell	6881 Buell Drive	Pallas	637464554	cpallasa@netscape.com	2020-08-14	90ac39d4-98fd-4ec9-a7c1-dca708781adf
Urbano	67 Farmco Plaza	Habbema	321458243	uhabbemab@mac.com	2021-02-07	45d9a8d5-4af2-4336-addb-f5a8766e88ea
Elmore	7203 Coolidge Place	Wandtke	111685721	ewandtkec@house.gov	2021-03-12	8d7a4825-3839-443c-b75c-e4e2ed554f78
Mona	1806 Moose Lane	Shirrell	880861567	mshirrelld@chronoengine.com	2020-11-11	55766e24-0f91-4d76-bc3e-ee93f4e5d15c
Manny	70 Debs Pass	Dudin	475705350	mdudine@adobe.com	2021-03-10	eaead65c-7db7-4bf0-88ec-5483e05d7801
Sibley	018 Corscot Lane	Cranstoun	881510780	scranstounf@wix.com	2020-06-02	2c35d872-346e-4eaf-9420-b413311d8a3e
Ed	052 Katie Center	Belsham	237478801	ebelshamg@pbs.org	2021-04-10	c5e3a8ae-dbd3-4f4a-a11a-eadad9cc7060
Bridget	37621 School Pass	Cox	406266252	bcoxh@pcworld.com	2020-06-24	39e3f835-17de-4400-b404-5510422f3915
Ira	0 Sachs Court	Grafton	894364223	igraftoni@lulu.com	2020-10-09	2b9758a1-a145-4fac-b628-dd31234c0f0d
Beck	6 Hermina Lane	Fawley	846385069	bfawleyj@yelp.com	2021-04-30	3b8f8d77-5bfc-439f-87f4-3ee128dc0dae
Randee	2 Mcbride Trail	Narup	361117569	rnarupk@merriam-webster.com	2020-11-23	92b0a93b-b5e2-47a6-9a75-4678939b3a0f
Evered	12442 John Wall Trail	Mellon	275567750	emellonl@mit.edu	2020-10-30	9cca1b02-82c4-4ba3-800b-d232e56727af
Dean	0 Gulseth Place	Lanaway	927343880	dlanawaym@va.gov	2020-10-14	f47a96f4-2572-4b3c-a1cb-5dfe84a56029
Tresa	896 Ryan Plaza	Astie	638795644	tastien@wisc.edu	2020-08-29	37625d5b-4e6f-46fe-a292-f67f581523db
Morty	37 West Place	Issett	446513625	missetto@mapquest.com	2021-02-02	fceec6e0-2802-4085-afd2-e170ba37fd9b
asdfa	asfasf	asfas	567567	asfasf@agsg.ru	2021-05-18	59b939c5-053b-402a-b0f2-ce037445fdb7
фыафыа	95 ыфафыа	фыафыа	12412414	asfaf@asfa.asf	2021-05-18	c45c7845-0ce8-4985-8c27-b38c7248acf2
Yasosu	543 Zabor	Bibu	124124124	asfasf@afs.rs	2021-05-18	708652ac-a92c-483b-aade-55a952865fcf
\.


--
-- Name: phonebook PK_b0cbfde78f705a1bc54d238fcd5; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.phonebook
    ADD CONSTRAINT "PK_b0cbfde78f705a1bc54d238fcd5" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

