# Spectacle Sling Application

The goal of this project is to develop authoring environment for [Spectacle](https://formidable.com/open-source/spectacle/) library.
Spectacle - [React](https://reactjs.org/) based library for creating presentations.
Apache Sling framework is used as backend framework.
Actually, this project is not only about Spectacle library, this is mostly a POC project about using [React](https://reactjs.org/) with Apache Sling(AEM).

Adobe Experience Manager(AEM) is CMS build on top of Apache Sling, it has its own understanding about what component is, their approach have a lot of advantages, but it also have some disadvantages.
Developer experience is one AEM disadvantages, especially for frontend developers.
Frontend developers during their work have to deal with a lot of AEM specific stuff like clientlibraries, HTL, it is also not a simple task to use modern js libraries, frameworks, tools.
In many projects frontend developers still have to have their own developer AEM server which brings a lot of problems into development process.
There are some projects which tries to bring modern frontend libraries into AEM, e.g [aem-react](https://github.com/sinnerschrader/aem-react), this project allows you to use React along with other components which
is really good for existing projects since they could involve React components into their code but it is still too AEM specific.

Backend developers have their own disadvantages in AEM component model, among them: developer have to deal with HTML frequently, it is hard to reuse components and their dialogs.

This project use another approach for bringing modern frontend into AEM. The approach is rather trivial, actually.
The idea is to separate frontend and backend development as much as possible. The goal is to provide frontend developers with following features:
* Should not care about AEM, they even should not know that they develop for AEM(in most cases).
* Own lightweight development environment.
* Ability to use any desired tools.

AEM developers should get the following features:
* No need to think about HTML/CSS/JS at all.
* Another notion of component comparing to AEM components, this approach should help to build reusable components.
* More convenient approach for building authorable components comparing to AEM.

## Built With

* [Apache Sling](https://sling.apache.org/)
* [ReactJS](https://reactjs.org/)
* [Material UI](https://material-ui.com/) - used for building athoring dialogs