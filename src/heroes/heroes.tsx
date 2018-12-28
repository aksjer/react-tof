import React, { ChangeEvent, Component } from 'react';
import { Hero } from '../models/hero';
import './heroes.css';

class Heroes extends Component<any, any> {
  constructor(public props: { heroes: Hero[] }) {
    super(props);
    this.state = { heroes: props.heroes, selectedHero: null };
  }

  list = () =>
    this.state.heroes.map((hero: Hero, i: number) => (
      <li
        key={i}
        onClick={() => this.setState({ selectedHero: hero })}
        className={this.classSelected(hero)}
      >
        <span className="badge">{hero.id}</span> {hero.name}
      </li>
    ));

  classSelected(hero: Hero) {
    if (hero === this.state.selectedHero) {
      return 'selected';
    }
  }

  selectedHero = () => {
    const hero = this.state.selectedHero;
    if (hero) {
      return (
        <div>
          <h2>{hero.name} Details</h2>
          <div>
            <span>id: </span>
            {hero.id}
          </div>
          <div>
            <label>
              name:
              <input
                placeholder="name"
                value={hero.name}
                onChange={this.selectHero.bind(this)}
              />
            </label>
          </div>
        </div>
      );
    }
  };

  selectHero = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    const heroes = this.state.heroes.map((h: Hero) =>
      h.id === this.state.selectedHero.id ? { ...h, name } : h
    );
    this.setState({
      heroes,
      selectedHero: { ...this.state.selectedHero, name }
    });
  };

  render = () => (
    <div>
      <h2>My Heroes</h2>
      <ul className="heroes">{this.list()}</ul>
      <div>{this.selectedHero()}</div>
    </div>
  );
}

export default Heroes;
