--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: addresses; Type: TABLE; Schema: public; Owner: feudal
--

CREATE TABLE public.addresses (
    id integer NOT NULL,
    country character varying(255),
    state character varying(255),
    city character varying(255),
    "statusDelete" boolean DEFAULT false,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.addresses OWNER TO feudal;

--
-- Name: addresses_id_seq; Type: SEQUENCE; Schema: public; Owner: feudal
--

CREATE SEQUENCE public.addresses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.addresses_id_seq OWNER TO feudal;

--
-- Name: addresses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: feudal
--

ALTER SEQUENCE public.addresses_id_seq OWNED BY public.addresses.id;


--
-- Name: communities; Type: TABLE; Schema: public; Owner: feudal
--

CREATE TABLE public.communities (
    id integer NOT NULL,
    name character varying(255),
    type character varying(255),
    "statusDelete" boolean DEFAULT false,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.communities OWNER TO feudal;

--
-- Name: communities_id_seq; Type: SEQUENCE; Schema: public; Owner: feudal
--

CREATE SEQUENCE public.communities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.communities_id_seq OWNER TO feudal;

--
-- Name: communities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: feudal
--

ALTER SEQUENCE public.communities_id_seq OWNED BY public.communities.id;


--
-- Name: members; Type: TABLE; Schema: public; Owner: feudal
--

CREATE TABLE public.members (
    id integer NOT NULL,
    "fullName" character varying(255),
    email character varying(255),
    "phoneNumber" character varying(255),
    occupation character varying(255),
    age character varying(255),
    "statusDelete" boolean DEFAULT false,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.members OWNER TO feudal;

--
-- Name: members_id_seq; Type: SEQUENCE; Schema: public; Owner: feudal
--

CREATE SEQUENCE public.members_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.members_id_seq OWNER TO feudal;

--
-- Name: members_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: feudal
--

ALTER SEQUENCE public.members_id_seq OWNED BY public.members.id;


--
-- Name: addresses id; Type: DEFAULT; Schema: public; Owner: feudal
--

ALTER TABLE ONLY public.addresses ALTER COLUMN id SET DEFAULT nextval('public.addresses_id_seq'::regclass);


--
-- Name: communities id; Type: DEFAULT; Schema: public; Owner: feudal
--

ALTER TABLE ONLY public.communities ALTER COLUMN id SET DEFAULT nextval('public.communities_id_seq'::regclass);


--
-- Name: members id; Type: DEFAULT; Schema: public; Owner: feudal
--

ALTER TABLE ONLY public.members ALTER COLUMN id SET DEFAULT nextval('public.members_id_seq'::regclass);


--
-- Data for Name: addresses; Type: TABLE DATA; Schema: public; Owner: feudal
--

COPY public.addresses (id, country, state, city, "statusDelete", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: communities; Type: TABLE DATA; Schema: public; Owner: feudal
--

COPY public.communities (id, name, type, "statusDelete", "createdAt", "updatedAt") FROM stdin;
1	HackAdemy	Asociacion	f	2022-01-12 23:31:37.552-06	2022-01-12 23:31:37.552-06
2	chocolate	abuelita	f	2022-01-14 17:05:33.199-06	2022-01-14 17:29:24.578-06
3	spaceApp	HackAton	t	2022-01-14 17:55:39.372-06	2022-01-14 18:01:26.735-06
\.


--
-- Data for Name: members; Type: TABLE DATA; Schema: public; Owner: feudal
--

COPY public.members (id, "fullName", email, "phoneNumber", occupation, age, "statusDelete", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: addresses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: feudal
--

SELECT pg_catalog.setval('public.addresses_id_seq', 1, false);


--
-- Name: communities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: feudal
--

SELECT pg_catalog.setval('public.communities_id_seq', 3, true);


--
-- Name: members_id_seq; Type: SEQUENCE SET; Schema: public; Owner: feudal
--

SELECT pg_catalog.setval('public.members_id_seq', 1, false);


--
-- Name: addresses addresses_pkey; Type: CONSTRAINT; Schema: public; Owner: feudal
--

ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT addresses_pkey PRIMARY KEY (id);


--
-- Name: communities communities_pkey; Type: CONSTRAINT; Schema: public; Owner: feudal
--

ALTER TABLE ONLY public.communities
    ADD CONSTRAINT communities_pkey PRIMARY KEY (id);


--
-- Name: members members_email_key; Type: CONSTRAINT; Schema: public; Owner: feudal
--

ALTER TABLE ONLY public.members
    ADD CONSTRAINT members_email_key UNIQUE (email);


--
-- Name: members members_pkey; Type: CONSTRAINT; Schema: public; Owner: feudal
--

ALTER TABLE ONLY public.members
    ADD CONSTRAINT members_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

