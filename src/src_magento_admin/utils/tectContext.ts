export class TestContext {
    private data: Record<string, any> = {};

    // Set a value in the context
    set(key: string, value: any): void {
        this.data[key] = value;
    }

    // Get a value from the context
    get<T>(key: string): T | undefined {
        return this.data[key] as T;
    }

    // Check if a key exists in the context
    has(key: string): boolean {
        return key in this.data;
    }

    // Clear all data (optional, for cleanup)
    clear(): void {
        this.data = {};
    }
}

// Export a singleton instance of the context
export const testContext = new TestContext();
