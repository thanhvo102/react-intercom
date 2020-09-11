import { Component } from 'react';

export interface IReactIntercomProps {
  appID: string;
  apiBase: string;
  [key: string]: any;
}

export default class Intercom extends Component<IReactIntercomProps> {}
