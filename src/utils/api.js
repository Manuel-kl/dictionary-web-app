import axios from "axios";

const wikiDictionaryApi = axios.create({
  baseURL: "https://en.wiktionary.org/w/rest.php/v1/page/",
});
