<?php

namespace App\Http\Controllers;

use App\Models\Like;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class LikeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //add like to a post by a user




    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
public function update(Request $request, string $id)
{
    try {
        // Validate input
        $data = $request->validate([
            'item_id' => 'required|exists:items,id',
        ]);

        // Find the like entry
        $like = Like::find($id);
    $user_id = Auth::user()->id;

        if ($like) {
            $like->is_liked = !$like->is_liked;
            $like->save();

            return response()->json([
                'success' => true,
                'message' => 'Like status updated',
                'data' => $like
            ], Response::HTTP_OK);
        } else {
                      $like = Like::create([
                'user_id' => $user_id,
                'item_id' => $data['item_id'],
                'is_liked' => true,
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Like created',
                'data' => $like
            ], Response::HTTP_CREATED);
        }
        

    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => 'Failed to update like',
            'error' => $e->getMessage()
        ], Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
