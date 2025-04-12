<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Transaction;
use Illuminate\Http\JsonResponse;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        try {
            $transactions = Transaction::all();
            return response()->json($transactions);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to fetch transactions'], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $transaction = Transaction::create($request->only(['type', 'price', 'tracking', 'user_id']));
            return response()->json($transaction, 201);
        } catch (\Exception $e) {
            return response()->json(['error' => "Failed to create transaction  $e"], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): JsonResponse
    {
        try {
            $transaction = Transaction::findOrFail($id);
            return response()->json($transaction);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Transaction not found'], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): JsonResponse
    {
        try {
            $transaction = Transaction::findOrFail($id);
            $transaction->update($request->only(['type', 'price', 'tracking', 'user_id']));
            return response()->json($transaction);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to update transaction'], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): JsonResponse
    {
        try {
            $deleted = Transaction::destroy($id);
            if ($deleted) {
                return response()->json(['message' => 'Transaction deleted successfully']);
            }
            return response()->json(['error' => 'Transaction not found'], 404);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to delete transaction'], 500);
        }
    }
}
