<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use DateTime;

class ClientController extends Controller
{
    public function index(Request $request){
        $clients = [];
        $where = [['Client_Name','LIKE','%'.$request['search']['name'].'%']];
        if($request['search']['customer'] != 'all'){
            array_push($where,["Customer_ID", $request['search']['customer']]);
        }
        if($request['search']['timestamp']){
            array_push($where,["Timestamp", '>=',$request['search']['timestamp']]);
            $dayAfter = (new DateTime($request['search']['timestamp']))->modify('+2 day')->format('Y-m-d');
            // return response()->json($dayAfter);
            array_push($where,["Timestamp", '<', $dayAfter]);
        }
       
        $clients = User::where($where)->with('pictures')->get();

        return response()->json($clients);
    }

    public function show($id){
        $user = User::find($id);
        $user->load('videos', 'pictures');
        return response()->json($user);
    }
}
