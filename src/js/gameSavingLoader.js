import read from './reader';
import json from './parser';
import GameSaving from './gameSaving.js';

export default class GameSavingLoader {
  static async load() {
    try {
      const buffer = await read();
      const jsonString = await json(buffer);
      const data = JSON.parse(jsonString);
      return new GameSaving(data.id, data.created , data.UserInfo);
    }
    catch(error) {
        throw new Error(`Error loading game saving: ${error}`);
    }
  }
}

