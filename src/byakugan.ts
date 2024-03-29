/**
 *  Byakugan-js
 *  github.com/rockmanvnx6/byakugan
 *  Licensed under the MIT license.
 *
 *  Author: Ngoc Thang Pham (Austin) (@rockmanvnx6)
 */
import { Settings } from "./components/settings";
import { Node } from "./components/node";
import { SettingsInterface } from "./interfaces/settings.interface";

export default class Byakugan {
    public settings: Settings;
    private grid: Array<Array<Node>>;

    constructor(settings: SettingsInterface) {
        try {
            this.settings = new Settings(settings);
            this.grid = [];
            this.constructNode(settings.grid);
        } catch (error) {
            throw error;
        }
    }

    private isObstacle(val: number, obstacles: Set<number>): boolean {
        return obstacles.has(val);
    }

    /**
     * Construct a grid of nodes based on the 2D array
     * passed from settings and then add neighbours for each node.
     *
     * @private
     * @param {Array<Array<number>>} grid
     * @memberof Byakugan
     */
    private constructNode(grid: Array<Array<number>>): void {
        for (let row: number = 0; row < grid.length; row++) {
            let _: Array<Node> = [];

            for (let col: number = 0; col < grid[0].length; col++) {
                let val: number = grid[row][col];

                let newNode: Node = new Node(
                    row,
                    col,
                    this.grid,
                    this.settings.diagonal,
                    this.isObstacle(val, this.settings.obstacles),
                    this.settings.callbacks
                );

                _.push(newNode);
            }
            this.grid.push(_);
        }

        for (let row: number = 0; row < this.grid.length; row++) {
            for (let col: number = 0; col < this.grid[0].length; col++) {
                this.grid[row][col].addNeighbours();
            }
        }
    }

    /**
     * Calculate the distance between 2 nodes based on theirs positions
     * on the grid.
     *
     * @private
     * @param {Node} a
     * @param {Node} b
     * @returns {number}
     * @memberof Byakugan
     */
    private distance(a: Node, b: Node): number {
        let { diagonal, heuristics } = this.settings;
        try {
            if (diagonal) {
                return heuristics.diagonal(a, b);
            }
            return heuristics.normal(a, b);
        } catch (error) {
            throw error;
        }
    }

    /**
     * Reset the node values for each node in the grid.
     *
     * @private
     * @memberof Byakugan
     */
    private resetGrid(): void {
        for (let row: number = 0; row < this.grid.length; row++) {
            for (let col: number = 0; col < this.grid[0].length; col++) {
                this.grid[row][col].reset();
            }
        }
    }

    /**
     * Check if a node is goal based on its position.
     *
     * @private
     * @param {Node} node
     * @param {Node} end
     * @returns {boolean}
     * @memberof Byakugan
     */
    private checkGoal(node: Node, end: Node): boolean {
        if (node) {
            return node.col == end.col && node.row == end.row;
        }
    }

    /**
     * Trace back and return a 2D array consisting of
     * the nodes' coordinations.
     *
     * @private
     * @param {Node} end
     * @returns {Array<Array<number>>}
     * @memberof Byakugan
     */
    private getResult(end: Node): Array<Array<number>> {
        let result: Array<Array<number>> = [];
        let current = end;
        while (current.previous) {
            result.unshift([current.row, current.col]);
            current = current.previous;
        }
        return result;
    }

    /**
     * Implementation of A* algorithm. Following the pseudo code
     * from https://en.wikipedia.org/wiki/A*_search_algorithm
     *
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @returns {Array<Array<number>>}
     * @memberof Byakugan
     */
    public search(
        row1: number,
        col1: number,
        row2: number,
        col2: number
    ): Array<Array<number>> {
        this.resetGrid();

        let start: Node = this.grid[row1][col1];
        let end: Node = this.grid[row2][col2];
        let openSet: Array<Node> = [start];
        let closeSet: Array<Node> = [];

        while (openSet.length > 0) {
            let current = null;

            for (let i = 0; i < openSet.length; i++) {
                if (!current || openSet[i].f < current.f) {
                    current = openSet[i];
                }
            }

            if (this.checkGoal(current, end)) {
                return this.getResult(current);
            }

            const _remove = openSet.indexOf(current);
            let [remove] = openSet.splice(_remove, 1);
            closeSet.push(remove);

            for (let i = 0; i < current.neighbours.length; i++) {
                let neighbour: Node = current.neighbours[i];

                if (!neighbour.isObstacle() && !closeSet.includes(neighbour)) {

                    let tempG: number =
                        current.g + this.distance(current, neighbour);                    
                    
                    if (!openSet.includes(neighbour) || tempG < neighbour.g) {
                        neighbour.updateScore(tempG, this.distance(neighbour, end));
                        neighbour.previous = current;
                        if (!openSet.includes(neighbour)) {
                            openSet.push(neighbour);
                        }
                    }
                }
            }
        }
        return [];
    }
}
