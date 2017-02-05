import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter, IndexRedirect } from 'react-router';
import App from './app';

import BinarySearch from './binary_search/binary_search';
import BubbleSort from './bubble_sort/bubble_sort';
import MergeSort from './merge_sort/merge_sort';
import MergeSortExercise from './merge_sort/merge_sort_exercise';
import QuickSort from './quick_sort/quick_sort';
import QuickSortExercise from './quick_sort/quick_sort_exercise_v2';

const Root =() => {
  return(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/bsearch"/>
        <Route path="bubblesort" component={BubbleSort}/>
        <Route path="bsearch" component={BinarySearch}/>
        <Route path="quicksort" component={QuickSort}/>
        <Route path="quickexercise" component={QuickSortExercise}/>
        <Route path="mergesort" component={MergeSort}/>
      </Route>
    </Router>
  );
};

export default Root;
